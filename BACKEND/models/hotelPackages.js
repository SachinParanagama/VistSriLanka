const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelPackageSchema = new Schema({
  hotel: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  Price: {
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

const hotelPackage = mongoose.model("hotelPackage", hotelPackageSchema);

module.exports = hotelPackage;
