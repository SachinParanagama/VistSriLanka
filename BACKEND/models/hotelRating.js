const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelRatingSchema = new Schema({
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  rating: {
    type: int,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", hotelRatingSchema);

module.exports = Event;
