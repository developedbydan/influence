import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

import { createToken } from "../utils/createToken.js";

dotenv.config({ path: `src/.env` });

const nodeEnv = process.env.NODE_ENV;

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
      secure: nodeEnv === "production",
      sameSite: "None",
    });

    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user: savedUser.email,
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
      secure: nodeEnv === "production",
      sameSite: "None",
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      user: user.email,
    });

    next();
  } catch (error) {
    res.status(500).json({ message: "Error during login", err });
    console.log(err);
  }
};

export const logout = async (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
      })
      .status(200)
      .json({ message: "Logged out successfully.", success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging out.", error: error.message });
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

export const updateUser = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const { email, username, password } = req.body;

    if (email) user.email = email;
    if (username) user.username = username;

    if (password) {
      user.password = await bcrypt.hash(password, 13);
    }

    await user.save();

    res.status(200).json({
      message: "Info updated successfully.",
      success: true,
      user: {
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while updating info.",
      error: error.message,
    });
  }
};
