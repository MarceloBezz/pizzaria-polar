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

        const accessToken = this.criarAccessToken(usuario.id, usuario.email)
        
        return { accessToken } 
    }

    criarAccessToken(id, email) {
        return sign({
            id: id,
            email: email
        }, jsonSecret.secret, {
            expiresIn: 86400
        });
    }
}

module.exports = AuthService