const router = require("express").Router();
const { TGFeedback } = require("../models/TGFeedback");

//add feedback
//http://localhost:5000/TGFeedback/
router.route("/").post((req, res) => {
    const postedBy = req.body.postedBy;
    const userName =  req.body.userName;
    const feedback = req.body.feedback;

    const newTGFeedback = new TGFeedback({
        postedBy,
        userName,
        feedback,
    });
    
    newTGFeedback
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
//http://localhost:5000/TGFeedback/
router.route("/").get((req, res) => {
    TGFeedback.find()
        .then((feedbacks) => {
        res.json(feedbacks);
        })
        .catch((err) => {
        console.log(err);
        });
});

module.exports = router;