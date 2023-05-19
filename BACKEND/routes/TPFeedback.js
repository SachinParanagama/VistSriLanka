const router = require("express").Router();
const { TPFeedback } = require("../models/TPFeedback");

//add feedback
//http://localhost:5000/TPFeedback/
router.route("/").post((req, res) => {
    const postedBy = req.body.postedBy;
    const tourPlace = req.body.tourPlace;
    const feedback = req.body.feedback;

    const newTPFeedback = new TPFeedback({
        postedBy,
        tourPlace,
        feedback,
    });
    
    newTPFeedback
        .save()
        .then(() => {
        res.json("Feedback added successfully");
        })
        .catch((err) => {
        console.log(err);
        return res.status(500).send("Server error");
        });
});

//view feedbacks
//http://localhost:5000/TPFeedback/
router.route("/").get((req, res) => {
    TPFeedback.find()
        .then((feedbacks) => {
        res.json(feedbacks);
        })
        .catch((err) => {
        console.log(err);
        });
});

//view by id
//http://localhost:5000/TPFeedback/:id
router.route("/:id").get(async (req, res) => {
    
});



module.exports = router;