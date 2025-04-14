import express from 'express';
import userRoutes from './userRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __arquivoAtualURL = fileURLToPath(import.meta.url); // Caminho do arquivo atual como URL
const __diretorioAtual = path.dirname(__arquivoAtualURL); // Caminho do diretório atual como path
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend'); // Caminho do diretório 'frontend' em relação ao arquivo atual

const routes = (app) => {
    app.get('/', (req, res) => {
        res.redirect('/home');
      });

      app.get('/home', (req, res) => {
        res.sendFile(path.join(frontendPath, 'home.html'));
      });

    app.use(express.json(), userRoutes);
    app.use(express.static(path.join(frontendPath, 'static')));
}

export default routes;