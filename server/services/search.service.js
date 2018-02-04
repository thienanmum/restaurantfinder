var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/restaurantFinder");

var Restaurant = require("../models/restaurant");

var service = {};
service.getRestaurants = function(myDishes, myLocation){    
    var query = Restaurant.find({$and: [{dishes: 'pho'}, {location: myLocation}]});
    query.exec(function(err, result){
        if(err) return err;
        console.log(result);
    })
}

service.getAllRestaurants = function(){    
    var query = Restaurant.find({});
    query.exec(function(err, result){
        if(err) return err;
        console.log(result);
        return result;
    })
}

module.exports = service;