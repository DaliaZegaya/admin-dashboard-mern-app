const usersModel = require("../models/users-model")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const validateRegister = require('../validation/register')
const validateLogin = require('../validation/login')
const { secretKey } = require("../config/keys");

const getAllUsers = async (req, res) => {
    await usersModel.find({})
        .then(users => {
            users.length == 0 ? res.status(300).json({ success: false, message: "users not found" }) :
                res.status(200).json({ success: true, users })
        })
        .catch(err => {
            res.status(400).json({ success: false, err })
        })
}

const register = async (req, res) => {
    const { isValid, errors } = validateRegister(req.body.user);
    if (!isValid) return res.status(400).json(errors)
    await usersModel.findOne({ email: req.body.user.email }, (err, user) => {
        if (err) return res.status(400).json(err)
        if (user) return res.json({ massage: "email already taken" })
        bcrypt.genSalt()
            .then((salt) => {
                bcrypt.hash(req.body.user.password, salt)
                    .then(async (hashPassword) => {
                        req.body.user.password = hashPassword;
                        await usersModel.insertMany(req.body.user)
                            .then(() => res.json({ massage: "success" }))
                            .catch(err => res.json(err))
                    })
                    .catch(err => { console.log(err); })
            })
            .catch(error => { console.log(error); })
    })
}
const login = async (req, res) => {
    const { isValid, errors } = validateLogin(req.body.user)
    if (!isValid) return res.status(400).json(errors)
    const email = req.body.user.email;
    const password = req.body.user.password;
    usersModel.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ emailNotFound: "Email not found" });
            }
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    const payload = {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    };
                    jwt.sign(payload, key, { expiresIn: 31556926 }, (err, token) => {
                        if (err) return res.status(400).json(err)
                        res.json({ success: true, token: `Bearer ${token}` });
                    });
                }
                else {
                    return res.status(400).json({ passwordIncorrect: "Password incorrect" });
                }
            });
        });
}

module.exports = {
    getAllUsers,
    register,
    login
}