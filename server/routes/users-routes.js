const router = require("express").Router()
const {
    getAllUsers,
    register,
    login,
    createNewUser
} = require("../controllers/users-ctrl")

router.get("/",getAllUsers)
// router.post('/register', register)
// router.post('/login', login)
router.post("/createNewUser", createNewUser)

module.exports = router