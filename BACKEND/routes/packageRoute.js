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
//http://localhost:5000/package/newPackage
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

//view all packages
//http://localhost:5000/package/
router.route("/").get((req, res) => {
  Package
    .find()
    .then((Package) => {
      res.json(Package);
    })
    .catch((err) => {
      console.log(err);
    });
});

//get package by hotel
//http://localhost:5000/package/hotel
router.route("/:hotel").get(async (req, res) => {  
  let hotel = req.params.hotel;

  await Package.findById(hotel)
    .then((Package) => {
      res.status(200).send({ status: "User fetched", package });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

//delete package data
//http://localhost:5000/hotel/delete/:id
router.route("/delete/:id").delete(async (req, res) => {
  const id = req.params.id;

  await Package.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).send({ status: "Package  deleted" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting", error: err.message });
    });
});

  module.exports = router;