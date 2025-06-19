const { verify, decode } = require('jsonwebtoken');
const jsonSecret = require('../database/config/jsonSecret.js');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    if(!token) {
       return res.status(401).send('Access token não informado')
    }

    const [, accessToken] = token.split(" ")

    try {
        // verify(accessToken, jsonSecret.secret)

        // const { id, email } = await decode(accessToken)
        const decoded = verify(accessToken, jsonSecret.secret)

        // req.usuarioId = id
        // req.email = email

        return next()
    } catch (error) {
        res.status(401).send("Usuário não autorizado")
    }
}