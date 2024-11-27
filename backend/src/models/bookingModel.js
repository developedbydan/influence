import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  influencerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Influencer",
    required: true,
  },
  //   date: {
  //     type: Date,
  //     required: true,
  //   },
  //   details: {
  //     type: String,
  //   },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
