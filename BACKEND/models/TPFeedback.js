const mongoose = require("mongoose"); // MongoDB
const Schema = mongoose.Schema; // MongoDB Schema

const feedbackSchema = new Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
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

module.exports = mongoose.model("Feedback", feedbackSchema);