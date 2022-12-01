const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Sale = new Schema(
    {
      saleName: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      categories: { type: Object, required: true },
      discountPercentage: { type: Number, required: true },
      isOnline: { type: Boolean, required: true },
    },
    { timeseries: true }
  );
module.exports = mongoose.model("sales", Sale)