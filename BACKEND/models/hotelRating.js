const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelRatingSchema = new Schema(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Rating", hotelRatingSchema);
module.exports = {Rating};
