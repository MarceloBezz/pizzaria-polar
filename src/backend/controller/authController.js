const AuthService = require('../service/authService.js')
const authService = new AuthService();

class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body;

        try {
            const login = await authService.login({ email, senha });

            req.session.user = { email }
            console.log(req.session.user)
            res.status(200).send(login);
        } catch (error) {
            res.status(401).send({ erro: error.message})
        }
    }
}

module.exports = AuthController;