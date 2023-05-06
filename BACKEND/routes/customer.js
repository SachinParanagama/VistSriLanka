const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Customer } = require("../models/customer");
const { CustomerToken } = require("../models/customerToken");
//const { customerAuth } = require("../middleware/customerAuth");

//customer registration
//http://localhost:5000/customer/register
router.route("/register").post((req, res) => {
    Customer.find({ email: req.body.email })
        .exec()
        .then((customer) => {
            if (customer.length >= 1) {
                return res.status(401).json({
                    status: false,
                    message: "Email exists",
                    data: undefined,
                });

            } else {
                bcrypt.hash(req.body.password, 2, (err, hash) => {
                    if (err) {
                      return res.status(500).json({
                        status: false,
                        message: "Error, cannot encrypt password",
                        data: undefined,
                      });
                    } else {
                      const customer = new Customer({ ...req.body, password: hash });
                      customer.save((err, doc) => {
                        if (err)
                          return res.json({
                            status: false,
                            message: err,
                            data: undefined,
                          });
          
                        return res.status(200).json({
                          status: true,
                          message: "Register Successfully",
                          data: doc,
                        });
                      });
                    }
                });
            }
        });
});

//view customers
//http://localhost:5000/customer/
router.route("/").get((req, res) => {
    Customer.find()
        .then((customers) => {
        res.json(customers);
        })
        .catch((err) => {
        console.log(err);
        });
});

//customer login
//http://localhost:5000/customer/login
router.route("/login").post((req, res) => {
    Customer.findOne({ email: req.body.email })
        .exec()
        .then((customer) => {
            if (!customer) {
                return res.status(404).json({
                message: "User not found",
                status: false,
                data: undefined,
                });
            }

            bcrypt.compare(
                req.body.password, 
                customer.password, 
                async (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Server error, Authentication failed",
                            status: false,
                            data: undefined,
                        });
                    }
                    if (result) {
                        const token = jwt.sign(
                            {
                                email: customer.email,
                                CustomerID: customer._id,
                            },
                            process.env.JWT_KEY,
                            {
                                expiresIn: "1h",
                            },
                        );

                        await CustomerToken.findOneAndUpdate(
                            { _customerId: Customer._id, tokenType: "login" },
                            { token: token },
                            { new: true, upsert: true },
                          );
                          return res.status(200).json({
                            status: true,
                            message: "Login Successfully",
                            data: {
                              token,
                              customer,
                            },
                          });
                        }
                        return res.status(401).json({
                          status: true,
                          message: "Wrong Password",
                          data: undefined,
                        });
                    },
                );
            })
        .catch((err) => {
            res.status(500).json({
                status: false,
                message: "Server Error, authrntication failed....",
                data: undefined,
            });
        });
});

module.exports = router;