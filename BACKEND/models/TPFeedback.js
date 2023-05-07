const mongoose = require("mongoose"); // MongoDB
const Schema = mongoose.Schema; // MongoDB Schema

const feedbackSchema = new Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
        },
        tourPlace: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "tourPlace",
            required: true,
        },
        userName: {
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

const TPFeedback = mongoose.model("TPFeedback", feedbackSchema);
module.exports = {TPFeedback};