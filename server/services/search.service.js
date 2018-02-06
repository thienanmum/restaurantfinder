var mongoose = require("mongoose");

var Restaurant = require("../models/restaurant");

var service = {};
// service.getRestaurants = function(myDishes, myLocation){    
//     return Restaurant.find({$and: [{dishes: 'pho'}, {location: myLocation}]});    
// }

service.getNearRestaurants = function(currentCord){     
    return Restaurant.find({location: {$near: currentCord}}).limit(2);    
}

// service.getRestaurantsWithDishes = function(dishes){      
//     var dishArray = dishes.split(",");
//     dishArray = dishArray.map(x => x.trim());    

//     return Restaurant.find({"dishes": {$in: dishArray}});    
// }

service.getRestaurantsWithDishesAndLocation = function(currentCord, dishes){  
    var dishArray = dishes.split(",");
    dishArray = dishArray.map(x => x.trim());

    return Restaurant.find({$and: [{location: {$near: currentCord}}, {dishes: {$in: dishArray}}]});    
}

module.exports = service;