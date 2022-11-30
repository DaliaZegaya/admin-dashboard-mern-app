const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Sale = new Schema(
    {
        id:Number,
        shoesType:String,
        company:String,
        model:String,
        price:String,
        Quantity:Number,
        isOnSale:Boolean,
        imgLink:String
    }
)
module.exports = mongoose.model("sales", Sale)