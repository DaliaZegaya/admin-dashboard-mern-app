const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
    {
        id:Number,
        firstName:String,
        lastName:String,
        email:{type:String, required:true},
        password:String,
        confirmPassword:String
    }
)
module.exports = mongoose.model("users", User)