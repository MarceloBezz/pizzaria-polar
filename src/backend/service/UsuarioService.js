const Service = require('./Service.js');

class UsuarioService extends Service {
    constructor() {
        super('Usuario');
    }

    async pegaTodos() {
        return super.pegaTodos();
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