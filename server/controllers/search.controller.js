//Author: Nu Quynh Nhu Tran - 986121
//Controller for searching restaurant

var express = require("express");
var searchService = require("../services/search.service.js");

var router = express.Router();

router.get("/search", getAllRestaurants);

function getAllRestaurants(request, response){      
    
    searchService.getAllRestaurants().then(docs => {
        response.send(docs);        
    })
}

function getRestaurants(req, res){
    searchService.getRestaurants(request.body.dishes, request.body.location).then(docs =>{
        response.send(docs);
    })
}

module.exports = router;

