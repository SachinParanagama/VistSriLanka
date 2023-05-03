const express = require("express");
const router = express.Router();
const { Customer } = require("../models/customer");

//customer registration
//http://localhost:5000/customer/
router.route("/").post((req, res) => {
    const userName =  req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;

    const newCustomer = new Customer({
        userName,
        email,
        password,
        phone,
    });
    
    newCustomer
        .save()
        .then(() => {
        res.json("Customer added successfully");
        })
        .catch((err) => {
        console.log(err);
        return res.status(500).send("Server error");
        });
});

module.exports = router;