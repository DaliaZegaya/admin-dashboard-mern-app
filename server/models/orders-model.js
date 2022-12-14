const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Order = new Schema(
    {
        orderNumber: { type: Number, required: true },
        orderDate: { type: Date, required: true },
        products: [{type: mongoose.Schema.Types.ObjectId, ref: "products", required:false}], 
        userDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "users", required:false }],
        itemsNumber: { type: Number, required: false },
        orderAmountInUsd: { type: Number, required: false },
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("orders", Order)