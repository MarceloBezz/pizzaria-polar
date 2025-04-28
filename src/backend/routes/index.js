const express = require('express');
const { fileURLToPath } = require('url');
const path = require('path');

const userRoutes = require('./userRoutes.js');
const frontendRoutes = require('./frontendRoutes.js');
const apiRoutes = require('./apiRoutes.js');

const __arquivoAtualURL = __filename;
const __diretorioAtual = path.dirname(__arquivoAtualURL);
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend');

const routes = (app) => {
    app.use(express.json(), userRoutes, frontendRoutes, apiRoutes);
    app.use(express.static(path.join(frontendPath, 'static')));
}

module.exports = routes;