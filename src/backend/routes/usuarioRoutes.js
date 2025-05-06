const express = require('express');
const Router = express.Router;
const cors = require('cors');

const UsuarioController = require('../controller/usuarioController.js')
const usuarioController = new UsuarioController();
const router = Router();

router.use(cors());

router.get('/api/usuario', (req, res) => usuarioController.pegaTodos(req, res))
router.get('/api/usuario/:id', (req, res) => usuarioController.pegarPorId(req, res))
router.get('/api/usuario/email/:email', (req, res) => usuarioController.existePorEmail(req, res))
router.post('/api/usuario', (req, res) => usuarioController.cadastrar(req, res))
router.put('/api/usuario/:id', (req, res) => usuarioController.atualizar(req, res))
router.delete('/api/usuario/:id', (req, res) => usuarioController.excluir(req, res))

module.exports = router;
