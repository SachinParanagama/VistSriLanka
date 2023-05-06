const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelRatingSchema = new Schema({
  hotel: {
    type: String,
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
