import express from "express";
import {
  createInfluencer,
  getInfluencers,
} from "../controllers/influencerController.js";

const router = express.Router();

router.get("/", getInfluencers);
router.post("/", createInfluencer);

export default router;
