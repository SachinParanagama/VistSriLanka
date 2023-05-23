const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const alert = require("alert");
const Mongoose = require("mongoose");
let Hotel = require("../models/hotel");

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/uploads/");
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
        category: req.body.category,
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

//delete hotel data
//http://localhost:5000/hotel/delete/:id
router.route("/delete/:id").delete(async (req, res) => {
  const id = req.params.id;

  await Hotel.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).send({ status: "Hotel  deleted" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting", error: err.message });
    });
});

//Update hotel data
//http://localhost:5000/hotel/update/:id
router.route("/update/:id").put(async (req, res) => {
  let id = req.body.id;
  const { hotelName } = req.body;
  const { location } = req.body;
  const { contact } = req.body;
  const { description } = req.body;

  const Update = {
    hotelName,
    location,
    contact,
    description,
  };

  const update = await Hotel.findByIdAndUpdate(id, Update)
    .then(() => {
      res.status(200).send({ status: "Hotel detials updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with updating details",
        error: err.message,
      });
    });
});

  module.exports = router;