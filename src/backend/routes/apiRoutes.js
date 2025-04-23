import { Router } from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

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

export default router;
