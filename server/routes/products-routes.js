const router = require("express").Router()
const {
    getAllProducts,
    getProductsById,
    createNewProducts,
    updateProducts,
    deleteProducts
} = require("../controllers/products-ctrl")

router.get("/",getAllProducts)
router.get("/getClothingById/:id",getProductsById)
router.post("/createClothing",createNewProducts)
router.put("/updateClothing/:id",updateProducts)
router.delete("/deleteClothing/:id",deleteProducts)

module.exports = router