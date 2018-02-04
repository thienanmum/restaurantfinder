var mongoose = require("mongoose");

var Restaurant = require("../models/restaurant");

var service = {};
service.getRestaurants = function(myDishes, myLocation){    
    return Restaurant.find({$and: [{dishes: 'pho'}, {location: myLocation}]});    
}

service.getAllRestaurants = function(){    
    return Restaurant.find({});    
}

module.exports = service;