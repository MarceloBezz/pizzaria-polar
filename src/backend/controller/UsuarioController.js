const { hash } = require('bcrypt');
const UsuarioService = require('../service/usuarioService.js')
const usuarioService = new UsuarioService();

class UsuarioController {
    async pegaTodos(req, res) {
        try {
            const todos = await usuarioService.pegaTodos();
            return res.status(200).json(todos);
        } catch {
            return res.status(404).json("Não encontrado!");
        }
    }

    async pegarPorId(req, res) {
        try {
            const { id } = req.params;
            const usuario = await usuarioService.pegarPorId(id);
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(404).json("Erro!");
        }
    }

    async existePorEmail(req, res) {
        try {
            const { email } = req.params;
            const existePorEmail = await usuarioService.existePorEmail(email);
            if (existePorEmail) {
                return res.status(200).json(existePorEmail);
            } else {
                return res.status(404).json("Nenhum usuário encontrado!");
            }
        } catch (error) {
            
        }
    }

    async cadastrar(req, res) {
        try {
            req.body.role = "CLIENTE"
            
            req.body.senha = await this.criptografarSenha(req.body.senha)
            console.log(req.body);
            
            const novoUsuario = await usuarioService.cadastrar(req.body)
            return res.status(200).json(novoUsuario)
        } catch (error) {
            return res.status(404).json(error)
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const usuario = await usuarioService.pegarPorId(id);

            if (!usuario) {
                return res.status(404).json("Usuário não encontrado!");
            }
            
            const usuarioAtualizado = await usuarioService.atualizar(req.body, id)
            return res.status(200).json(usuarioAtualizado)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    async excluir(req, res) {
        try {
            const { id } = req.params;
            const usuario = await usuarioService.pegarPorId(id);

            if (!usuario) {
                return res.status(404).json("Usuário não encontrado!");
            }

            const usuarioAtualizado = await usuarioService.excluir(id)
            return res.status(200).json(usuarioAtualizado)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    async criptografarSenha(senhaDigitada) {
        const hashSenha = await hash(senhaDigitada, 8);
        return hashSenha;
    }
}

module.exports = UsuarioController;