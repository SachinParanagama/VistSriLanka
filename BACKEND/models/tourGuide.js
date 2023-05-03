const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tourGuideSchema = new Schema({
  ID: {
    type: String,
  },
  tourGuideID: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  ContactNumber: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
  locations: {
    type: String,
    required: true,
  },
  charges: {
    type: Number,
    required: true,
  },
  descripton: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
});

const TourGuide = mongoose.model("TourGuide", tourGuideSchema);

module.exports = TourGuide;
