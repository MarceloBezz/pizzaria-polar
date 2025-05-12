const { where } = require('sequelize')
const database = require('../database/models');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../database/config/jsonSecret.js')

class AuthService {
    async login(dto) {
        const usuario = await database.Usuario.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        });

        if (!usuario) {
            throw new Error("usuário não cadastrado")
        }

        const senhasIguais = await compare(dto.senha, usuario.senha)

        if (!senhasIguais) {
            throw new Error("Senha incorreta!")
        }

        const acessToken = sign({
            id: usuario.id,
            email: usuario.email
        }, jsonSecret.secret, {
            expiresIn: 86400
        });
        
        return { acessToken } 
    }
}

module.exports = AuthService