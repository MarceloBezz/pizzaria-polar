import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 8080;

routes(app);

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
});