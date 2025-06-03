const express = require('express');
const session = require('express-session')
const routes = require('./routes/index.js');
require('dotenv/config');

const app = express();
const PORT = 8080;

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

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});