const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Product = new Schema(
    {
        id:Number,
        garmentType:String,
        gender:String,
        company:String,
        model:String,
        price:String,
        Quantity:Number,
        isShort:Boolean,
        isDryfit:Boolean,
        imgLink:String
    }
)
module.exports = mongoose.model("products", Product)