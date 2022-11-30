const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Order = new Schema(
    {
        id:Number,
        sportType:String,
        productName:String,
        company:String,
        price:String,
        Quantity:Number,
        teamId:Number,
        imgLink:String
    }
)
module.exports = mongoose.model("orders", Order)