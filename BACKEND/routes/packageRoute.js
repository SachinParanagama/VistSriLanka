const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const alert = require("alert");
const Mongoose = require("mongoose");
let Package = require("../models/hotelPackages");

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../BACKEND/uploads/package");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("image");


//add new hotel
//http://localhost:5000/hotel/newPackage
router.post("/newPackage", upload, async (req, res) => {
    const newPackage = new Package({
        hotel: req.body.hotel,
        packageName: req.body.packageName,
        Price: req.body.Price,
        description: req.body.description,
        image: req.file.filename,   
    });
  
    newPackage.save().then(() => {
        res.json("Package details added successfully");
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).send("Server error");
      });
  });


  module.exports = router;