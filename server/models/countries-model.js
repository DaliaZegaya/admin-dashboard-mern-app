const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Country = new Schema(
    {
        countryName: {type:String, required:true},
        currency: {type:String, required:true}
    }
)
module.exports = mongoose.model("countries", Country)