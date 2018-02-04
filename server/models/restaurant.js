

const mongoose = require("mongoose")

var restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    address:{street:string, city:string, state:string, zip:string},
    location: [Number],
    dishes: [String],
    rating:string,
    reviews: [String]
}, {collection: "restaurants"})

module.exports = mongoose.model("Restaurant", restaurantSchema);
