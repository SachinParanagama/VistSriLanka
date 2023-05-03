const express=require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const dotenv=require("dotenv");
const connectDB = require("./config/db");




const eventRouter = require("./routes/events.js");
const tourPlaceRouter = require("./routes/tourPlace.js");




const app  =express();
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/uploads', express.static('BACKEND/uploads'));


// Event Routes
app.use('/event',eventRouter);


//TourPlace Routes
app.use('/tourPlace',tourPlaceRouter);




const PORT=process.env.PORT  || 5000;


app.listen(5000,console.log(`server started on port ${PORT}`));