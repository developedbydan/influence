import express from "express";
import {
  signup,
  login,
  getUser,
  logout,
  updateUser,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/user", authMiddleware, getUser);
router.put("/user", authMiddleware, updateUser);

export default router;
