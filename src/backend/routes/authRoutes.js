const express = require('express');
const Router = express.Router;

const AuthController = require('../controller/authController.js')
const authController = new AuthController();
const router = Router();

router.post('/auth/login', (req, res) => authController.login(req, res));
router.post('/auth/logout', (req, res) => authController.logout(req, res));
router.get('/auth/logado', (req, res) => authController.logado(req, res));

module.exports = router;
