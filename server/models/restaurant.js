

const mongoose = require("mongoose")

var restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    address:{street:String, city:String, state:String, zip:String},
    location: [Number],
    dishes: [String],
    rating: String,
    reviews: [String]
}, {collection: "restaurants"})

module.exports = mongoose.model("Restaurant", restaurantSchema);
