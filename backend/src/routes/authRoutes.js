import express from "express";
import {
  signup,
  login,
  getUser,
  logout,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/user", authMiddleware, getUser);

export default router;
