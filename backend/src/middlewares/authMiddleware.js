import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config({ path: `src/.env` });
const jwtSecret = process.env.JWT_SECRET;

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "No token provided." });
    }

    const decoded = jwt.verify(token, jwtSecret);

    const user = await User.findById(decoded.id);
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(403)
      .json({ status: false, message: "Unauthorized access." });
  }
};
