const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  ID: {
    type: String,
  },
  eventID: {
    type: String,
  },
  category : {
    type : String,
    required : true
  },
  eventName: {
    type: String,
    required: true,
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
  priceCategory: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  description: {
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
