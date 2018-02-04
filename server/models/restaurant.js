

const mongoose = require("mongoose")

var restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    location: [Number],
    dishes: [String],
    reviews: [String]
})

module.exports = mongoose.model("Restaurant", restaurantSchema);
