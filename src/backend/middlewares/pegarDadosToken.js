const { verify } = require('jsonwebtoken');
const jsonSecret = require('../database/config/jsonSecret.js');

module.exports = (token) => {
    const decoded = verify(token, jsonSecret.secret)
    const { id, email } = decoded

    return { id, email }
}