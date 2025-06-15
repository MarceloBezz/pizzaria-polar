const express = require('express');
const { fileURLToPath } = require('url');
const path = require('path');

const __arquivoAtualURL = __filename; // Caminho do arquivo atual como URL
const __diretorioAtual = path.dirname(__arquivoAtualURL); // Caminho do diretório atual como path
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend'); // Caminho do diretório 'frontend' em relação ao arquivo atual

const router = express.Router();
const autorizar = require('../middlewares/autorizado.js')
const logado = require('../middlewares/logado.js')
    
router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', (req, res) => res.sendFile(path.join(frontendPath, 'home.html')));
router.get('/contato', (req, res) => res.sendFile(path.join(frontendPath, 'contato.html')));
router.get('/cadastro', (req, res) => res.sendFile(path.join(frontendPath, 'cadastro.html')));
router.get('/login', (req, res) => res.sendFile(path.join(frontendPath, 'login.html')));
router.get('/cardapio', (req, res) => res.sendFile(path.join(frontendPath, 'cardapio.html')));

module.exports = router;