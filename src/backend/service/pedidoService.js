const Service = require('./service.js');

class PedidoService extends Service {
    constructor() {
        super('Pedido');
    }

    async pegaTodos() {
        return super.pegaTodos();
    }

    async pegarPorId(id) {
        return super.pegarPorId(id);
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

module.exports = PedidoService;