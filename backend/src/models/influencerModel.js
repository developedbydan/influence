import mongoose from "mongoose";

const influencerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trim spaces
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Tech", "Fashion", "Fitness", "Food", "Travel, Comedy"], // Limited categories
  },
  followers: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageUrl: {
    type: String,
    required: true,
    match: /^https?:\/\/.+/, // Url validation
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Influencer = mongoose.model("Influencer", influencerSchema);

export default Influencer;
