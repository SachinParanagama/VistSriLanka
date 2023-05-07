const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const alert = require("alert");
const Mongoose = require("mongoose");
let Event = require("../models/event");

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

router.post("/add-event", upload, async (req, res) => {
  const newEvent = new Event({
    eventID: req.body,
    eventName: req.body.eventName,
    location: req.body.location,
    date: req.body.date,
    price: req.body.price,
    priceCategory: req.body.priceCategory,
    unit: req.body.unit,
    image: req.file.filename,
  });

  const totalNumberOfProductInDb = await Event.countDocuments();

  // convert number to string, so we can concatenate 0s easily...

  let numberToString = totalNumberOfProductInDb.toString();

  // If length of number string is less than 5 then add leading 0s in nuberToString

  if (numberToString.length < 5) {
    for (let i = numberToString.length; i < 5; i++) {
      numberToString = "0" + numberToString;
    }
  }

  newEvent.eventID = `EID${numberToString}`;

  newEvent
    .save()
    .then(() => {
      alert("Event added successfully");
      res.redirect("http://localhost:3000/view-event");
    })
    .catch((err) => {
      alert("Event details already exists");
      res.redirect("http://localhost:3000/add-event");
      console.log(err);
    });
});

router.route("/view-event").get((req, res) => {
  Event.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:ID").put(async (req, res) => {
  let eventId = req.body.ID;
  const { eventName } = req.body;
  const { location } = req.body;
  const { price } = req.body;
  const {priceCategory} = req.body;
  const { unit } = req.body;

  const Update = {
    eventName,
    location,
    price,
    priceCategory,
    unit,
  };

  const update = await Event.findByIdAndUpdate(eventId, Update)
    .then(() => {
      res.status(200).send({ status: "Event detials updated" });
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

  await Event.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(200).send({ status: "Event  deleted" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with deleting event", error: err.message });
    });
});

// router.route("/update/quantity/:ID").put(async(req,res)=>{
//     let productId = req.params.ID;
//     const {quantity} = req.body;

//     const Update = {
//         quantity,
//     }

//     const update = await Product.findByIdAndUpdate(productId, Update).then(()=>{
//         res.status(200).send({status: "Price updated"})
//     }).catch((err)=>{
//         console.log(err);
//         res.status(500).send({status: "Error with updating price", error: err.message});
//     })
// })

//search event based on the event date

router.post("/search-event", async (req, res) => {
  try {
    Event.find({
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
