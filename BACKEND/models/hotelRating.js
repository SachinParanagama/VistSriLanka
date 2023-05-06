const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  hid: {
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

const Event = mongoose.model("Event", hotelSchema);

module.exports = Event;
