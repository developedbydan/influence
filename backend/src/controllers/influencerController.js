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

export const bookInfluencer = async (req, res) => {
  const { influencerId } = req.params;
  // const { date, details } = req.body;

  try {
    const newBooking = newBooking({
      userId: req.session.userId,
      influencerId,
      // date,
      // details,
    });

    await newBooking.save();
    res
      .status(201)
      .json({ message: "Booking successful!", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Booking error.", error: error.message });
  }
};
