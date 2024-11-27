import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/userModel.js";

dotenv.config({ path: `src/.env` });
const jwtSecret = process.env.JWT_SECRET;

export const authMiddleware = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }

  jwt.verify(token, jwtSecret, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({ status: true, user: user.username });
      } else {
        return req.json({ status: false });
      }
    }
  });
};
