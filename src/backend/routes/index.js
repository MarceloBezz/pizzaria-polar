import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

import userRoutes from './userRoutes.js';
import frontendRoutes from './frontendRoutes.js';

const __arquivoAtualURL = fileURLToPath(import.meta.url);
const __diretorioAtual = path.dirname(__arquivoAtualURL);
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend');

const routes = (app) => {
    app.use(express.json(), userRoutes, frontendRoutes);
    app.use(express.static(path.join(frontendPath, 'static')));
}

export default routes;