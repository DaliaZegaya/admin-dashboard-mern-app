const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Order = new Schema(
    {
        orderNumber: { type: Number, required: true },
        orderDate: { type: Date, required: true },
        userDetails: { type: Object, required: true },
        sum: { type: String, required: true },
        itemsNumber: { type: Number, required: true }
    }
)
module.exports = mongoose.model("orders", Order)