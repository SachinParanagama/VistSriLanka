const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const Mongoose = require('mongoose');
let tourPlace = require("../models/tourPlace");

//image upload
const storage = multer.diskStorage ({
    destination : (req, file, cb) => {
        cb(null, '../BACKEND/uploads');
    },
    filename : (req,file,cb) => {	
        cb(null, Date.now() + file.originalname)
    }
});

const upload = multer({
    storage:storage,
    
}).single('image')

//add tour place
//http://localhost:5000/tourPlace/
router .post('/', upload, async(req,res)=>{
    const newTourPlace = new tourPlace({
        ID: req.body.ID,
        placeName: req.body.placeName,
        location: req.body.location,
        description: req.body.description,
        image: req.file.filename,
    })

    const totalNumberOfProductInDb = await tourPlace.countDocuments();

    // convert number to string, so we can concatenate 0s easily...
    
    let numberToString = totalNumberOfProductInDb.toString();
    
    
    
    // If length of number string is less than 5 then add leading 0s in nuberToString
    
    if(numberToString.length < 5){
    
        for (let i = numberToString.length; i < 5; i++){
    
            numberToString = "0" + numberToString
    
        }
    
    }
    
    newTourPlace.ID = `TPID${numberToString}`

    newTourPlace.save().then(()=>{
        res.json("Tour place added successfully");
    
    }).catch((err)=>{
        console.log(err);
        return res.status(500).send(("Server error" ));
    })
})

//view tour places
//http://localhost:5000/tourPlace/

router.route("/").get((req,res)=>{
    tourPlace.find().then((tourPlaces)=>{
        res.json(tourPlaces)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;