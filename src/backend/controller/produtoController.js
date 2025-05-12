const ProdutoService = require('../service/produtoService.js')
const produtoService = new ProdutoService();

class ProdutoController {
    async pegaTodos(req, res) {
        try {
            const todos = await produtoService.pegaTodos();
            return res.status(200).json(todos);
        } catch {
            return res.status(404).json("Não encontrado!");
        }
    }

    async pegarPorId(req, res) {
        try {
            const { id } = req.params;
            const usuario = await produtoService.pegarPorId(id);
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(404).json("Erro!");
        }
    }

    async cadastrar(req, res) {
        try {
            const novoProduto = await produtoService.cadastrar(req.body)
            return res.status(200).json(novoProduto)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const produto = await produtoService.pegarPorId(id);

            if (!produto) {
                return res.status(404).json("Produto não encontrado!");
            }

            const produtoAtualizado = await produtoService.atualizar(req.body, id)
            return res.status(200).json(produtoAtualizado)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

    async excluir(req, res) {
        try {
            const { id } = req.params;
            const produto = await produtoService.pegarPorId(id);

            if (!produto) {
                return res.status(404).json("Produto não encontrado!");
            }

            const produtoAtualizado = await produtoService.excluir(id)
            return res.status(200).json(produtoAtualizado)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }

}

module.exports = ProdutoController;