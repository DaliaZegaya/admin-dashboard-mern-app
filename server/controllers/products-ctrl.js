const productsModel = require("../models/products-model")

const getAllProducts = async (req,res) => {
    await productsModel.find({})
    .then((products)=>{
        products.length == 0 ? res.status(300).json({success:false, message:"no products found"}) :
        res.status(200).json({success:true,products})
    })
    .catch(err=>res.status(400).json({success:false,err}))
}
const getProductsById = async (req,res) => {
    await productsModel.findById(req.params.id)
    .then(result=>{
        res.status(200).json({success:true,result})
    })
    .catch(err=>res.status(400).json({success:true,err}))
}
const createNewProducts = async (req,res) => {
    await productsModel.insertMany(req.body.products)
    .then(()=>res.status(200).json({success:true, message:"products added successfully"}))
    .catch(err=>{res.status(400).json({success:false,err})})
}
const updateProducts = async (req,res) => {
    await productsModel.findByIdAndUpdate(req.params.id, req.body.products)
    .then(result=>res.status(200).json({success:true,result}))
    .catch(err=>res.status(400).json({success:false,err}))
}
const deleteProducts = async (req,res) => {
    await productsModel.findByIdAndDelete(req.params.id)
    .then(()=>{res.status(200).json({success:true})})
    .catch(err=>res.status(400).json({success:false,err}))
}

module.exports = {
    getAllProducts,
    getProductsById,
    createNewProducts,
    updateProducts,
    deleteProducts,
}