const router = require("express").Router()
const {
    getAllProducts,
    getProductsById,
    createNewProducts,
    updateProducts,
    deleteProducts
} = require("../controllers/products-ctrl")

router.get("/",getAllProducts)
router.get("/getProductsById/:id",getProductsById)
router.post("/createNewProducts",createNewProducts)
router.put("/updateProducts/:id",updateProducts)
router.delete("/deleteProducts/:id",deleteProducts)

module.exports = router