const router = require("express").Router()
const {
    getAllOrders,
    getOrdersId,
    createNewOrders
} = require("../controllers/orders-ctrl")

router.get("/",getAllOrders)
router.get("/getOrdersId",getOrdersId)
router.post("/createNewOrders",createNewOrders)

module.exports = router