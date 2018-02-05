// Author: ChauKy Nguyen
// ID: 986085
// Decription: funcitons integrate with DB for CRUD restaurant

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

service.deleteRestaurantById = function(id){ 
    return Restaurant.findByIdAndRemove(id);    
}

service.updateRestaurantById = function(id, restaurant){ 
    return Restaurant.findByIdAndUpdate(id, restaurant);    
}
module.exports = service;