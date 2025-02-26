const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 character long'),
    body('password').isLength({ min: 6 }).withMessage('Should must be 6 character minimum.')
], userController.registerUser)

module.exports = router;