import express from "express";
import {
  bookInfluencer,
  // createInfluencer,
  getBookings,
  getInfluencers,
  getOneInfluencer,
  getPopularInfluencers,
} from "../controllers/influencerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/bookings", authMiddleware, getBookings);

router.get("/", authMiddleware, getInfluencers);
router.get("/popular", authMiddleware, getPopularInfluencers);

router.get("/:influencerId", authMiddleware, getOneInfluencer);

// router.post("/", createInfluencer);
router.post("/:influencerId/book", authMiddleware, bookInfluencer);

export default router;
