const logado = require("../logado.js")

module.exports = async (req, res, next) => {
    try {
       await logado(req.session.user.token);
       next();
    } catch (error) {
       res.redirect("http://localhost:8080/home");
    }
}