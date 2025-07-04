const path = require('path')
const fs = require('fs')
const dadosToken = require('./pegarDadosToken.js')
const UsuarioService = require('../service/usuarioService.js')
const usuarioService = new UsuarioService();

module.exports = async (req, res) => {
    
    const { id } = dadosToken(req.session.user.token)
    const user = await usuarioService.pegarPorId(id);
    const caminhoFoto = path.join(__dirname, '..', 'database', 'fotos', user.foto)
    
    fs.access(caminhoFoto, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).json({ erro: "Foto não encontrada." });
        }

        res.type(path.extname(caminhoFoto))
        res.sendFile(caminhoFoto);
    })
}