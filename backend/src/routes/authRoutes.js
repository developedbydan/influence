import express from "express";
import { signup, login, getUser } from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", authMiddleware, getUser);

export default router;
