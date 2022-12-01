const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Product = new Schema(
    {
        category: {type:String, required:true},
        gender: {type:String, required:true},
        brand: {type:String, required:true},
        model: {type:String, required:true},
        size: {type:String || Number, required:true},
        price: {type:String, required:true},
        quantity: {type:Number, required:true},
        isOnSale: {type:Boolean, required:true},
        imgLink: {type:String, required:false}
    }
)
module.exports = mongoose.model("products", Product)