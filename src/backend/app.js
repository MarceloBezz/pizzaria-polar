const express = require('express');
const routes = require('./routes/index.js');
require('dotenv/config');

const app = express();
const PORT = 8080;

routes(app);

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});