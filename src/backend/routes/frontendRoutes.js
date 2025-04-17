import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __arquivoAtualURL = fileURLToPath(import.meta.url); // Caminho do arquivo atual como URL
const __diretorioAtual = path.dirname(__arquivoAtualURL); // Caminho do diretório atual como path
const frontendPath = path.join(__diretorioAtual, '..', '..', 'frontend'); // Caminho do diretório 'frontend' em relação ao arquivo atual

const router = express.Router();
    
router.get('/', (req, res) => res.redirect('/home'));

router.get('/home', (req, res) => res.sendFile(path.join(frontendPath, 'home.html')));

export default router;