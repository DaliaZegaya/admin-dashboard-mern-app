const salesModel = require("../models/sales-model")

const getAllSales = async (req,res) => {
    await salesModel.find({})
    .then(sales=>{
        sales.length == 0 ? res.json({success:false, message:"no sales found"}) :
        res.status(200).json({success:true,sales})
    })
    .catch(err=>{res.status(400).json({success:false,err})})
}
const getSalesById = async (req,res) => {
    await salesModel.findById(req.params.id)
    .then(result=>res.status(200).json({success:true,result}))
    .catch(err=>res.status(400).json({success:false,err}))
}
const createNewSales = async (req,res) => {
    await salesModel.insertMany(req.body.sales)
    .then(()=>{
        res.status(200).json({success:true, message:"sales added successfully"})
    })
    .catch(err=>{res.status(400).json({success:false,err})})
}

module.exports = {
    getAllSales,
    getSalesById,
    createNewSales
}