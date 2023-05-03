const router = require("express").Router();
const { TPFeedback } = require("../models/TPFeedback");

//add feedback
//http://localhost:5000/TPFeedback/
router.route("/").post((req, res) => {
    const postedBy = req.body.postedBy;
    const userName =  req.body.userName;
    const feedback = req.body.feedback;

    const newTPFeedback = new TPFeedback({
        postedBy,
        userName,
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

module.exports = router;