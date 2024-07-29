const express = require("express")
const {signUp, logIn} = require("../controller/authcontroller")
const router = express()

router.post('/register', signUp)
router.post('/login', logIn)

module.exports = router