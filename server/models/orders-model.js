const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Order = new Schema(
    {
        orderNumber: { type: Number, required: true },
        orderDate: { type: Date, required: true },
        orderItems: [{ type: mongoose.SchemaTypes.ObjectId,ref: "products", required:false }], 
        userDetails: { type: mongoose.SchemaTypes.ObjectId , required:false },
        itemsNumber: { type: Number, required: false },
        orderAmountInUsd: { type: Number, required: true },
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("orders", Order)