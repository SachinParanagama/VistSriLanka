const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  ID: {
    type: String,
  },
  eventID: {
    type: String,
  },
  eventName: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
