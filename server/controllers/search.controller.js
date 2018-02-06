//Author: Nu Quynh Nhu Tran - 986121
//Controller for searching restaurant

var express = require("express");
var searchService = require("../services/search.service.js");

var router = express.Router();

router.get("/:longtitude/:latitude/:dishes?", getRestaurants);
//router.post("/", getAllRestaurants);
//router.get("/:dishes", getRestaurantsWithDishes);
//router.get("/:dishes/:location", getRestaurantsWithDishesAndLocation);

function getRestaurants(req, res){ 
    var currentCord = [Number(req.params.longtitude), Number(req.params.latitude)];  
       
    if(!req.params.dishes){        
        searchService.getNearRestaurants(currentCord).then(docs => {
            res.send(docs);        
        })
    }
    else{        
        searchService.getRestaurantsWithDishesAndLocation(currentCord, req.params.dishes).then(docs => {
            res.send(docs);        
        })
    }
    
    
}

// function getRestaurantsWithDishes(req, res){
//     console.log(req.params.dishes);
//     searchService.getRestaurantsWithDishes(req.params.dishes).then(docs =>{
//         res.send(docs);
//     })
// }

// function getRestaurantsWithDishesAndLocation(req, res){
//     searchService.getRestaurantsWithDishesAndLocation(req.params.dishes, req.params.location).then(docs =>{
//         res.send(docs);
//     })
// }

// function getRestaurants(req, res){
//     searchService.getRestaurants(req.params.dishes, req.params.location).then(docs =>{
//         res.send(docs);
//     })
// }

module.exports = router;

