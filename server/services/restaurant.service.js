var mongoose = require("mongoose");

var Restaurant = require("../models/restaurant");

var service = {};
service.getAllRestaurants = function(){    
    return Restaurant.find({});    
}

service.getRestaurantById = function(id){    
    return Restaurant.findById(id);    
}
service.addNewRestaurant = function(restaurant){ 
    return Restaurant.create(restaurant);    
}

module.exports = service;