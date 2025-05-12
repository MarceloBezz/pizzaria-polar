const Service = require('./service.js');

class UsuarioService extends Service {
    constructor() {
        super('Usuario');
    }

    async pegaTodos() {
        return super.pegaTodos();
    }

    async pegarPorId(id) {
        return super.pegarPorId(id);
    }

    async existePorEmail(email) {
        return super.existePorEmail(email);
    }

    async cadastrar(dados) {
        return super.cadastrar(dados);
    }

    async atualizar(dados, id) {
        return super.atualizar(dados, id);
    }

    async excluir(id) {
        return super.excluir(id);
    }

}

module.exports = UsuarioService;