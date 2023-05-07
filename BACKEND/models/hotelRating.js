const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelRatingSchema = new Schema(
  {
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
