const router = require("express").Router();
const {Rating} = require("../models/hotelRating");

// //add feedback
// //http://localhost:5000/rating/
// router.route("/").post((req, res) => {
//     const newRating = new Rating({
//         hotel:req.body.hotel,
//         user: req.body.user,
//         rating:req.body.Rating,
//         feedback:req.body.feedback,
//     });
    
//     newRating
//         .save()
//         .then(() => {
//         res.json("Feedback added successfully");
//         })
//         .catch((err) => {
//         console.log(err);
//         return res.status(500).send("Server error");
//         });
// });

//http://localhost:5000/rating/
http: router.post("/", (req, res) => {
    const { hotel, user, rating,feedback} = req.body;
  
    const newRating = new Rating({
        hotel,
        user,
        rating,
        feedback,
    });
  
    newRating
      .save()
      .then(() => {
        res.json("Review added Successfully...");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  module.exports = router;