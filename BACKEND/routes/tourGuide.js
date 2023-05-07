const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const alert = require("alert");
const Mongoose = require("mongoose");
let TourGuide = require("../models/tourGuide");

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../BACKEND/uploads");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("image");

router.post("/add-tourGuide", upload, async (req, res) => {
  const newTourGuide = new TourGuide({
    tourGuideID: req.body,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    ContactNumber: req.body.ContactNumber,
    age: req.body.age,
    languages: req.body.languages,
    locations: req.body.locations,
    charges: req.body.charges,
    descripton: req.body.descripton,
    image: req.file.filename,
  });

  const totalNumberOfTourGuidesInDb = await TourGuide.countDocuments();

  // convert number to string, so we can concatenate 0s easily...

  let numberToString = totalNumberOfTourGuidesInDb.toString();

  // If length of number string is less than 5 then add leading 0s in nuberToString

  if (numberToString.length < 5) {
    for (let i = numberToString.length; i < 5; i++) {
      numberToString = "0" + numberToString;
    }
  }

  newTourGuide.tourGuideID = `TID${numberToString}`;

  newTourGuide
    .save()
    .then(() => {
      alert("TourGuide added successfully");
      res.redirect("http://localhost:3000/view-tourGuide");
    })
    .catch((err) => {
      alert("TourGuide details already exists");
      res.redirect("http://localhost:3000/add-tourGuide");
      console.log(err);
    });
});

router.route("/view-tourGuide").get((req, res) => {
  TourGuide.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:ID").put(async (req, res) => {
  let tourGuideID = req.body.ID;
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { ContactNumber } = req.body;
  const { languages } = req.body;
  const { locations } = req.body;
  const { charges } = req.body;
  const { age } = req.body;

  const Update = {
    firstName,
    lastName,
    ContactNumber,
    languages,
    locations,
    charges,
    age,
  };

  const update = await TourGuide.findByIdAndUpdate(tourGuideID, Update)
    .then(() => {
      res.status(200).send({ status: "TourGuide detials updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Error with updating event details",
        error: err.message,
      });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  const id = req.params.id;

  await TourGuide.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).send({ status: "TourGuide  deleted" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting event", error: err.message });
    });
});

//search event based on the event date

router.post("/search-tourGuide", async (req, res) => {
  try {
    TourGuide.find({
      date: {
        $gte: new Date(req.body.fromDate),
        $lt: new Date(req.body.toDate),
      },
    }).then((result) => {
      res.json(result);
    });
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

module.exports = router;
