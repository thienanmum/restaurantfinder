//Author: Nu Quynh Nhu Tran - 986121
//Controller for searching restaurant

var express = require("express");
var searchService = require("../services/search.service.js");

var router = express.Router();

router.get("/", getAllRestaurants);
router.get("/:dishes", getRestaurantsWithDishes);
//router.get("/:dishes/:location", getRestaurantsWithDishesAndLocation);

function getAllRestaurants(req, res){      
    
    searchService.getAllRestaurants().then(docs => {
        res.send(docs);        
    })
}

function getRestaurantsWithDishes(req, res){
    console.log(req.params.dishes);
    searchService.getRestaurantsWithDishes(req.params.dishes).then(docs =>{
        res.send(docs);
    })
}

function getRestaurantsWithDishesAndLocation(req, res){
    searchService.getRestaurantsWithDishesAndLocation(req.params.dishes, req.params.location).then(docs =>{
        res.send(docs);
    })
}

function getRestaurants(req, res){
    searchService.getRestaurants(req.params.dishes, req.params.location).then(docs =>{
        res.send(docs);
    })
}

module.exports = router;

