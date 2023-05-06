const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    _customerId: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
    },
    tokenType: {
        type: String,
        enum: ["login", "passwordReset"],
    },
});

const CustomerToken = mongoose.model("CustomerToken", customerTokenSchema);
module.exports = { CustomerToken };