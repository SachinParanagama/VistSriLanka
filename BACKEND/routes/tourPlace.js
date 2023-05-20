const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const alert = require("alert");
const Mongoose = require("mongoose");
let tourPlace = require("../models/tourPlace");

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

//add tour place
//http://localhost:5000/tourPlace/
router.post("/add-tourPlace", upload, async (req, res) => {
  const newTourPlace = new tourPlace({
    tourID: req.body,
    category: req.body.category,
    placeName: req.body.placeName,
    location: req.body.location,
    description: req.body.description,
    image: req.file.filename,
  });

  const totalNumberOfProductInDb = await tourPlace.countDocuments();

  // convert number to string, so we can concatenate 0s easily...

  let numberToString = totalNumberOfProductInDb.toString();

  // If length of number string is less than 5 then add leading 0s in nuberToString

  if (numberToString.length < 5) {
    for (let i = numberToString.length; i < 5; i++) {
      numberToString = "0" + numberToString;
    }
  }

  newTourPlace.tourID = `TPID${numberToString}`;

  newTourPlace
    .save()
    .then(() => {
      alert("Tour place added successfully");
      res.redirect("http://localhost:3000/view-tourPlace");
    })
    .catch((err) => {
      alert("Tour Plce details already exists");
      res.redirect("http://localhost:3000/add-tourPlace");
      console.log(err);
    });
});

//view tour places
//http://localhost:5000/tourPlace/
router.route("/view-tourPlace").get((req, res) => {
  tourPlace
    .find()
    .then((tourPlaces) => {
      res.json(tourPlaces);
    })
    .catch((err) => {
      console.log(err);
    });
});

//view tour place by id
//http://localhost:5000/tourPlace/:id
router.route("/:id").get(async (req, res) => {
  let tourPlaceId = req.params.id;

  const TourPlace = await tourPlace
    .findById(tourPlaceId)
    .then((tourPlace) => {
      res.status(200).json({
        success: true,
        tourPlace,
      });
    })
    .catch((err) => {
      console.log(err.meesage);
      res
        .status(500)
        .send({ status: "Error with get item", error: err.meesage });
    });
});

// update tour place
// http://localhost:5000/tourPlace/:id
router.put("/:id", async (req, res) => {
  let tourID = req.body.ID;
  const { placeName, location, description } = req.body;
  const update = {
    placeName,
    location,
    description,
  };
  try {
    const updatedTourplace = await tourPlace.findByIdAndUpdate(
      tourID,
      update,
    );
    res.status(200).send({ status: "Tour place details updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "Error with updating tour place details",
      error: err.message,
    });
  }
});

//delete tour place
//http://localhost:5000/tourplace/:id
router.route("/:id").delete(async (req, res) => {
    const id = req.params.id;
  
    await tourPlace.findByIdAndRemove(id)
      .exec()
      .then(() => {
        res.status(200).send({ status: "Tour place  deleted" });
      })
      .catch((err) => {
        res
          .status(500)
          .send({ status: "Error with deleting tour place", error: err.message });
    });

});

module.exports = router;
