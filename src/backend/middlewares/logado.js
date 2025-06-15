const { verify } = require('jsonwebtoken');
const jsonSecret = require('../database/config/jsonSecret.js');
const UsuarioService = require('../service/usuarioService.js');
const usuarioService = new UsuarioService();

module.exports = async (token) => {
    try {
        const decoded = verify(token, jsonSecret.secret);
        const { id, email } = decoded;
        const usuario = await usuarioService.pegarPorId(id);

        return usuario.nome.split(" ")[0]
    } catch (error) {
        throw new Error("Token inválido!")
    }
}