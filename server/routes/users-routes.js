const router = require("express").Router()
const {
    getAllUsers,
    register,
    login
} = require("../controllers/users-ctrl")

router.get("/",getAllUsers)
router.post('/register', register)
router.post('/login', login)

module.exports = router