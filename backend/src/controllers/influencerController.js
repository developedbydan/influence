import Influencer from "../models/influencerModel.js";

export const getInfluencers = async (req, res) => {
  try {
    const influencers = await Influencer.find();
    res.status(200).json(influencers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createInfluencer = async (req, res) => {
  try {
    const { name, location, category, followers, price, imageUrl } = req.body;

    const newInfluencer = new Influencer({
      name,
      location,
      category,
      followers,
      price,
      imageUrl,
    });

    const savedInfluencer = await newInfluencer.save();
    res.status(201).json(savedInfluencer);
  } catch (err) {
    res.status(500).json({ message: "Error during creation", err });
    console.log(err);
  }
};
