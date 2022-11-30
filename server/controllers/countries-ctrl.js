const countriesModel = require("../models/countries-model")

const getAllCoutries = async (req,res) => {
    await countriesModel.find({})
    .then(countries=>{
        countries.length == 0 ? res.status(300).json({success:false,message:"countries not found"}) :
        res.status(200).json({success:true,countries})
    })
    .catch(err=>{
        res.status(400).json({success:false,err})
    })
}
const getCountryById = async (req,res) => {
    await countriesModel.findById(req.params.id)
    .then(result=>{res.status(200).json({success:true,result})})
    .catch(err=>{res.status(400).json({success:false,err})})
}
const createNewCountry = async (req,res) => {
    await countriesModel.insertMany(req.body.countries)
    .then(()=>{
        res.status(200).json({success:true,message:"countries added successfully"})
    })
    .catch(err=>{
        res.status(400).json({success:false,err})
    })
}


module.exports = {
    getAllCoutries,
    getCountryById,
    createNewCountry
}