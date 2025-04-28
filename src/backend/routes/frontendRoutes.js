const express = require('express');
const { fileURLToPath } = require('url');
const path = require('path');

const __arquivoAtualURL = __filename; // Caminho do arquivo atual como URL
const __diretorioAtual = path.dirname(__arquivoAtualURL); // Caminho do diretório atual como path
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend'); // Caminho do diretório 'frontend' em relação ao arquivo atual

const router = express.Router();
    
router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', (req, res) => res.sendFile(path.join(frontendPath, 'home.html')));
router.get('/contato', (req, res) => res.sendFile(path.join(frontendPath, 'contato.html')));
router.get('/cadastro', (req, res) => res.sendFile(path.join(frontendPath, 'cadastro.html')));

module.exports = router;