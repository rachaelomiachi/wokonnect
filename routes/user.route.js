const express = require("express")
const {getUserById} = require("../controller/usercontroller")
const router = express()

router.get('/:userId', getUserById)


module.exports = router