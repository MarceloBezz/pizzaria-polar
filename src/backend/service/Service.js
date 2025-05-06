const datasource = require('../database/models')

class Service {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodos(where = {}) {
        return datasource[this.model].findAll({where: { ...where }});
    }

    async pegarPorId(id) {
        return datasource[this.model].findAll({where: { id: id }});
    }

    async existePorEmail(email) {
        return datasource[this.model].findOne({where: { email: email }});
    }

    async cadastrar(dados) {
        return datasource[this.model].create(dados)
    }

    async atualizar(dados, id) {
        return datasource[this.model].update(dados, {
            where: { id: id }
        })
    }

    async excluir(id) {
        return datasource[this.model].destroy({
            where: { id: id }
        })
    }
}

module.exports = Service;