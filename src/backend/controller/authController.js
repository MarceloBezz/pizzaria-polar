const AuthService = require('../service/authService.js')
const authService = new AuthService();

class AuthController {
    async login(req, res) {
        const { email, senha } = req.body;
      
        try {
            const login = await authService.login({ email, senha }); //Access token

            req.session.user = { token: login.accessToken }

            res.status(200).send(login);
        } catch (error) {
            res.status(401).send({ erro: error.message})
        }
    }
}

module.exports = AuthController;