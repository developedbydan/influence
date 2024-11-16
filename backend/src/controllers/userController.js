import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists." });
    }

    const hash = await bcrypt.hash(password, 13);

    const newUser = new User({
      username,
      password: hash,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Error during registration", err });
    console.log(err);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username: username });
  if (!existingUser) {
    return res.status(400).json({ message: "Wrong username." });
  }

  const isValid = await bcrypt.compare(password, existingUser.password);
  if (!isValid) {
    return res.status(400).json({ message: "Wrong password." });
  }

  res.status(201).json({ message: "Logged in!" });
};
