const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Order = new Schema(
    {
        orderNumber: { type: Number, required: true },
        orderDate: { type: Date, required: true },
        userDetails: { type: mongoose.SchemaTypes.ObjectId, required:false },
        itemsNumber: { type: Number, required: true },
        orderAmountInUsd: { type: String, required: true },
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("orders", Order)