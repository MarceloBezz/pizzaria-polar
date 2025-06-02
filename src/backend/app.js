const express = require('express');
const session = require('express-session')
const routes = require('./routes/index.js');
require('dotenv/config');

const app = express();
const PORT = 8080;

app.use(session({
    secret: 'meuSegredoSuperSecreto', // 🔑 String secreta para assinar o ID da sessão (NUNCA exponha isso no código público)
    resave: false, // Não salva a sessão se não tiver sido modificada
    saveUninitialized: false, // Não cria sessão até que algo seja salvo nela
    cookie: {
        secure: false, // 🔒 true se usar HTTPS
        httpOnly: true, // O cookie não pode ser acessado pelo JavaScript do frontend (mais seguro)
        maxAge: 1000 * 60 * 60 * 1 // 1 hora
    }
}));
routes(app);

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});