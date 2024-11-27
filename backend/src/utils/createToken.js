import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({ path: `src/.env` });
const jwtSecret = process.env.JWT_SECRET;

export const createToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
