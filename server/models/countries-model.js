const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Country = new Schema(
    {
        id:Number,
        teamName:String
    }
)
module.exports = mongoose.model("countries", Country)