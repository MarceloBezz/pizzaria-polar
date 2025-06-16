const { verify, decode } = require('jsonwebtoken');
const jsonSecret = require('../database/config/jsonSecret.js');

const UsuarioService = require('../service/usuarioService.js');
const usuarioService = new UsuarioService();

module.exports = async (req, res, next) => {
    let token = null

    if (req.session?.user?.token) {
        token = req.session.user.token
    } else {
        const authHeader = req.headers.authorization;
        
        if (authHeader && authHeader.startsWith('Bearer ')) {
            token = authHeader.split(' ')[1];
        }
    }

    if (!token) {
        return res.status(401).send('Access token não informado')
    }

    try {
        const decoded = verify(token, jsonSecret.secret);
        const { id, email } = decoded;
        const usuario = await usuarioService.existePorEmail(email);

        if (!usuario) {
            return res.status(401).send('Usuário não encontrado');
        }

        //TODO: Verificar a role

        return next();
    } catch (error) {
        res.status(401).send("Usuário não autorizado")
    }
}