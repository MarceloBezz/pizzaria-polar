const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const Router = express.Router;

const UsuarioController = require('../controller/UsuarioController.js')
const usuarioController = new UsuarioController();
const router = Router();

router.use(cors());

router.get('/api/cep/:cep', async (req, res) => {
    const { cep } = req.params;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    try {
        const response = await fetch(url);
        
        if (response.status !== 200) {
            return res.status(404).json({ error: 'CEP não encontrado' });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
}
);

router.get('/api/usuario', (req, res) => usuarioController.pegaTodos(req, res))
router.get('/api/usuario/:id', (req, res) => usuarioController.pegarPorId(req, res))
router.post('/api/usuario', (req, res) => usuarioController.cadastrar(req, res))
router.put('/api/usuario/:id', (req, res) => usuarioController.atualizar(req, res))
router.delete('/api/usuario/:id', (req, res) => usuarioController.excluir(req, res))

module.exports = router;
