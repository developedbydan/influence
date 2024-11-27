import express from "express";
import {
  bookInfluencer,
  createInfluencer,
  getInfluencers,
} from "../controllers/influencerController.js";

const router = express.Router();

router.get("/", getInfluencers);
router.post("/", createInfluencer);
// router.post("/:influencerId/book", isAuthenticated, bookInfluencer);

export default router;
