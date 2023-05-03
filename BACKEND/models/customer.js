const mongoose = require("mongoose"); // MongoDB
const Schema = mongoose.Schema; // MongoDB Schema

const customerSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
}); 

const Customer = mongoose.model("Customer", customerSchema);
module.exports = {Customer};