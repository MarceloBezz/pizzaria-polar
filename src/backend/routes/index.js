const express = require('express');
const { fileURLToPath } = require('url');
const path = require('path');

const usuarioRoutes = require('./usuarioRoutes.js');
const produtoRoutes = require('./produtoRoutes.js');
const frontendRoutes = require('./frontendRoutes.js');
const apiRoutes = require('./apiRoutes.js');
const authRoutes = require('./authRoutes.js')

const __arquivoAtualURL = __filename;
const __diretorioAtual = path.dirname(__arquivoAtualURL);
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend');

const routes = (app) => {
    app.use(express.json(),
        authRoutes,
        usuarioRoutes,
        produtoRoutes,
        frontendRoutes,
        apiRoutes);
        
    app.use(express.static(path.join(frontendPath, 'static')));
}

module.exports = routes;