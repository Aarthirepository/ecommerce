const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')

router.get("/",userController.getUserDetails)

router.post('/',userController.postUserDetails)

router.get('/',userController.getUserById)


module.exports = router