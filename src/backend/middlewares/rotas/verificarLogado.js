const logado = require("../logado.js")

module.exports = async (req, res, next) => {
    try {
       await logado(req.session.user.token);
       next();
    } catch (error) {
       res.redirect("https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/home");
    }
}