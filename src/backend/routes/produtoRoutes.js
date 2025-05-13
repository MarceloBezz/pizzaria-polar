const express = require('express');
const Router = express.Router;
const cors = require('cors');

const ProdutoController = require('../controller/produtoController.js')
const produtoController = new ProdutoController();
const router = Router();

router.use(cors());

router.get('/api/produto', (req, res) => produtoController.pegaTodos(req, res))
router.get('/api/produto/:id', (req, res) => produtoController.pegarPorId(req, res))
router.get('/api/produto/email/:email', (req, res) => produtoController.existePorEmail(req, res))
router.post('/api/produto', (req, res) => produtoController.cadastrar(req, res))
router.put('/api/produto/:id', (req, res) => produtoController.atualizar(req, res))
router.delete('/api/produto/:id', (req, res) => produtoController.excluir(req, res))

module.exports = router;
