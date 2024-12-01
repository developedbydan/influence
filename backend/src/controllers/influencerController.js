import Booking from "../models/bookingModel.js";
import Influencer from "../models/influencerModel.js";

export const getInfluencers = async (req, res) => {
  try {
    const influencers = await Influencer.find();
    res.status(200).json(influencers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOneInfluencer = async (req, res) => {
  try {
    const { influencerId } = req.params;
    const influencer = await Influencer.findById(influencerId);

    res.status(200).json(influencer);
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
  try {
    const { influencerId } = req.params;
    const userId = req.user.id;
    const { details } = req.body;

    const newBooking = new Booking({
      userId,
      influencerId,
      details,
    });

    await newBooking.save();
    res.status(201).json({
      success: true,
      message: "Booking successful!",
      booking: newBooking,
    });
  } catch (error) {
    res.status(500).json({ message: "Booking error.", error: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Booking.find({ userId: userId })
      .populate("influencerId", "name category price")
      .exec();

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPopularInfluencers = async (req, res) => {
  try {
    const influencers = await Influencer.find({ popular: true });
    res.status(200).json(influencers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
