const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const alert = require("alert");
const Mongoose = require("mongoose");
let Hotel = require("../models/hotel");

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../BACKEND/uploads/hotel");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("image");


//add new hotel
//http://localhost:5000/hotel/newHotel
router.post("/newHotel", upload, async (req, res) => {
    const newHotel = new Hotel({
        hId: req.body.hId,
        hotelName: req.body.hotelName,
        location: req.body.location,
        contact: req.body.contact,
        description: req.body.description,
        image: req.file.filename,   
    });
  
    // generate hotel ID
    const totalNumberOfHotelInDb = await Hotel.countDocuments()+1;  
    let numberToString = totalNumberOfHotelInDb.toString(); // convert number to string    
     
    if (numberToString.length < 5) {
      for (let i = numberToString.length; i < 5; i++) {
        numberToString = "0" + numberToString;
      }
    }  
    newHotel.hId = `H${numberToString}`;
  
    newHotel.save().then(() => {
        res.json("Hotel details added successfully");
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send("Server error");
      });
  });

//view all hotels
//http://localhost:5000/hotel/
router.route("/").get((req, res) => {
  Hotel
    .find()
    .then((Hotel) => {
      res.json(Hotel);
    })
    .catch((err) => {
      console.log(err);
    });
});

  module.exports = router;