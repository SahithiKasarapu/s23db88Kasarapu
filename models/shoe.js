const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
brand: String,
color: {
    type: String,
    required: true,
    match: /^[a-zA-Z]+$/
  },
price:{
    type:Number,
    min: 10,
    max: 10000 }
})
module.exports = mongoose.model("shoe",
shoeSchema)