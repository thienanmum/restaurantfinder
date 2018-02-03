//Author: Nu Quynh Nhu Tran - 986121
//Controller for searching restaurant

var express = require("express");
var searchService = require("../services/search.service.js");

var router = express.Router();

router.get("/search", getRestaurants);

function getRestaurants(request, response){
    
    //var result = searchService.getRestaurants(request.body.dishes, request.body.location);
    var result = searchService.getAllRestaurants();
    response.send(result);  

}

module.exports = router;

