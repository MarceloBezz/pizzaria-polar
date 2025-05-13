const express = require('express');
const Router = express.Router;

const AuthController = require('../controller/authController.js')
const router = Router();

router.post('/auth/login', AuthController.login);

module.exports = router;
