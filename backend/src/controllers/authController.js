import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { createToken } from "../utils/createToken.js";

export const signup = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 13);

    const user = await User.create({
      email,
      username,
      password: hash,
      createdAt,
    });
    const savedUser = await user.save();

    const token = createToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      savedUser,
    });

    next();
  } catch (err) {
    res.status(500).json({ message: "Error during registration", err });
    console.log(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.json({ message: "Incorrect password or email" });
    }

    const token = createToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });

    next();
  } catch (error) {
    res.status(500).json({ message: "Error during login", err });
    console.log(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user data.", error });
  }
};
