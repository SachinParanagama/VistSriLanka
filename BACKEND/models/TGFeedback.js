const mongoose = require("mongoose"); // MongoDB
const Schema = mongoose.Schema; // MongoDB Schema

const TGuidefeedbackSchema = new Schema({
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
});

const TGFeedback = mongoose.model("TGFeedback", TGuidefeedbackSchema);
module.exports = {TGFeedback};