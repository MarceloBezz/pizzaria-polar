const express = require('express');
const path = require('path');

const __arquivoAtualURL = __filename; // Caminho do arquivo atual como URL
const __diretorioAtual = path.dirname(__arquivoAtualURL); // Caminho do diretório atual como path
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend'); // Caminho do diretório 'frontend' em relação ao arquivo atual

const router = express.Router();
const logado = require('../middlewares/rotas/verificarLogado.js')
const naoLogado = require('../middlewares/rotas/verificarNaoLogado.js')
    
router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', (req, res) => res.sendFile(path.join(frontendPath, 'home.html')));
router.get('/contato', (req, res) => res.sendFile(path.join(frontendPath, 'contato.html')));
router.get('/cadastro', naoLogado, (req, res) => res.sendFile(path.join(frontendPath, 'cadastro.html')));
router.get('/login', naoLogado, (req, res) => res.sendFile(path.join(frontendPath, 'login.html')));
router.get('/dados', logado,  (req, res) => res.sendFile(path.join(frontendPath, 'dados.html')));
router.get('/cardapio', (req, res) => res.sendFile(path.join(frontendPath, 'cardapio.html')));
router.get('/sobre', (req, res) => res.sendFile(path.join(frontendPath, 'sobre.html')));

module.exports = router;