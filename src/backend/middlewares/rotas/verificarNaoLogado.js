const logado = require("../logado.js")

module.exports = async (req, res, next) => {
    try {
       logado(req.session.user.token);
       res.redirect("https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/home");
    } catch (error) {
        next();
    }
}