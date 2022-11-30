const router = require("express").Router()
const {
    getAllSales,
    getSalesById,
    createNewSales
} = require("../controllers/sales-ctrl")

router.get("/",getAllSales)
router.get("/getShoesById",getSalesById)
router.post("/createShoes",createNewSales)

module.exports = router