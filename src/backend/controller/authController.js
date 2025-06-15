const AuthService = require('../service/authService.js')
const authService = new AuthService();
const logado = require('../middlewares/logado.js')

class AuthController {
    async login(req, res) {
        const { email, senha } = req.body;

        try {
            const login = await authService.login({ email, senha }); //Access token

            req.session.user = { token: login.accessToken }

            res.status(200).send(login);
        } catch (error) {
            res.status(401).send({ erro: error.message })
        }
    }

    logout(req, res) {
        req.session.destroy();
        res.json({ mensagem: "Logout realizado com sucesso!" })
    }

    async logado(req, res) {
        if (req.session?.user?.token) {
            try {
                const token = req.session.user.token
                const usuarioNome = await logado(token)

                res.json({ logado: true, nome: usuarioNome })
            } catch (error) {
                res.json({ logado: false })
            }
        } else {
            res.json({ logado: false })
        }
    }
}

module.exports = AuthController;