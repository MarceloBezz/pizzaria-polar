const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const Router = express.Router;

const ApiController = require('../controller/apiController.js')
const apiController = new ApiController();
const router = Router();

router.use(cors());

router.get('/api/cep/:cep', async (req, res) => apiController.buscaCep(req, res));

module.exports = router;
