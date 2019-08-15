const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()
const { authenticate} = require('../middleware')


router.post('/signup', authenticate, authController.signup)

router.post('/login', authenticate, authController.login)

module.exports = router