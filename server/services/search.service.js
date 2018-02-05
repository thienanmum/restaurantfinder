var mongoose = require("mongoose");

var Restaurant = require("../models/restaurant");

var service = {};
service.getRestaurants = function(myDishes, myLocation){    
    return Restaurant.find({$and: [{dishes: 'pho'}, {location: myLocation}]});    
}

service.getAllRestaurants = function(){    
    return Restaurant.find({});    
}

service.getRestaurantsWithDishes = function(dishes){      
    var dishArray = dishes.split(",");
    dishArray = dishArray.map(x => x.trim());    

    return Restaurant.find({"dishes": {$in: dishArray}});    
}

service.getRestaurantsWithDishesAndLocation = function(dishes, location){    
    return Restaurant.find({$and: [{"dishes": {$or: dishes}}, {"location": location}]});    
}

module.exports = service;