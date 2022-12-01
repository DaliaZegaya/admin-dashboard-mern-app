const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Purchases = new Schema(
    {
        receiptNum: { type: String, required:true },
        purchaserInfo: { type: String, required: true },
        purchaseSum: { type: Number, required: true },
        itemsNum: { type: Number, required: true },
        country: { type: String, required: true, },
        date: { type: Date, required:true }
    },
    {
        timeseries: true
    }

)

module.exports = mongoose.model("purchases", Purchases)