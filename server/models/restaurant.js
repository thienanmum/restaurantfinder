const mongoose = require("mongoose")

var restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    location: [Double],
    dishes: [String],
    reviews: [String]
})

module.exports = mongoose.model("Restaurant", restaurantSchema);
