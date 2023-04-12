const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
brand: String,
color: String,
price: Number
})
module.exports = mongoose.model("shoe",
shoeSchema)