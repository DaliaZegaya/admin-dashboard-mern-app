const router = require("express").Router()
const {
    getAllCoutries,
    getCountryById,
    createNewCountry
} = require("../controllers/countries-ctrl")

router.get("/",getAllCoutries)
router.get("/getCountryById",getCountryById)
router.post("/createNewCountry",createNewCountry)

module.exports = router