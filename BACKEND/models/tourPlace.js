const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tourPlaceSchema = new Schema({
    ID: {
        type: String,
        required: true,
        unique: true,
    },
    placeName: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const tourPlace = mongoose.model("tourPlace", tourPlaceSchema);
module.exports = tourPlace;