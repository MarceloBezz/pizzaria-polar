const express = require('express');
const session = require('express-session')
const routes = require('./routes/index.js');
require('dotenv/config');
const db = require('./database/models');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SEGREDO_SECURITY, 
    resave: false, 
    saveUninitialized: false, 
    cookie: {
        secure: false, 
        httpOnly: true, 
        maxAge: 1000 * 60 * 60 * 1 
    }
}));

routes(app);

db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    app.listen(PORT, () => {
      console.log(`Servidor escutando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });