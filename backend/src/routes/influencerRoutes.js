import express from "express";
import {
  bookInfluencer,
  createInfluencer,
  getBookings,
  getInfluencers,
  getOneInfluencer,
} from "../controllers/influencerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getInfluencers);
router.get("/:influencerId", authMiddleware, getOneInfluencer);

// router.post("/", createInfluencer);
router.post("/:influencerId/book", authMiddleware, bookInfluencer);
router.post("/bookings", authMiddleware, getBookings);

export default router;
