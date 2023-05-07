const router = require("express").Router();
const {Rating} = require("../models/hotelRating");

//add feedback
//http://localhost:5000/rating/
router.route("/").post((req, res) => {
  const postedBy = req.body.postedBy;
  const hotel = req.body.hotel;
  const rating = req.body.rating;
  const feedback = req.body.feedback;

  const newRating = new Rating({
    postedBy,
    hotel,
    rating,
    feedback,
  });

  newRating
    .save()
    .then(() => {
      res.json("Rating added successfully");
    })

    .catch((err) => {
      console.log(err);
      return res.status(500).send("Server error");
    });
});

//view feedbacks
//http://localhost:5000/rating/
router.route("/").get((req, res) => {
  Rating.find()
    .then((ratings) => {
      res.json(ratings);
    })
    .catch((err) => {
      console.log(err);
    });
});

  module.exports = router;