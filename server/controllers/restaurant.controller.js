var express = require("express");
var restaurantService = require("../services/restaurant.service.js");

var router = express.Router();

router.get("/", getAllRestaurants);

function getAllRestaurants(req, res){      
    
    restaurantService.getAllRestaurants().then(docs => {
        console.log(docs);
        res.send(docs);        
    })
}


router.post("/", addRestaurant);
function addRestaurant(req, res){
    restaurantService.addNewRestaurant(req.body).then(docs =>{
        res.send(docs);
    })
}

module.exports = router;
