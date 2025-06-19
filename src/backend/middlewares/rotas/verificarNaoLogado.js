const logado = require("../logado.js")

module.exports = async (req, res, next) => {
    try {
       logado(req.session.user.token);
       res.redirect("http://localhost:8080/home");
    } catch (error) {
        next();
    }
}