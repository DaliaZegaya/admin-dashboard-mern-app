const ordersModel = require("../models/orders-model")

const getAllOrders = async (req,res) => {
    await ordersModel.find({})
    .populate({path:"products"})
    .then((orders)=>{
        orders.length == 0 ? res.status(300).json({success:false, message:"orders not found"}) :
        res.status(200).json({success:true,orders})
    })
    .catch(err=>{res.status(400).json({success:false,err})})
}
const getOrdersId = async (req,res) => {
    await ordersModel.findById(req.params.id)
    .then(result=>res.status(200).json({success:true,result}))
    .catch(err=>res.status(400).json({success:false,err}))
}
const createNewOrders = async (req,res) => {
    await ordersModel.insertMany(req.body.orders)
    .then(()=>{
        res.status(200).json({success:true,message:"orders added successfully"})
    })
    .catch(err=>res.status(400).json({success:false,err}))
}


module.exports = {
    getAllOrders,
    getOrdersId,
    createNewOrders,
}