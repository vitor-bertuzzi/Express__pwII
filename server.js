const express = require('express');
const rotasUsuarios = require('./routes/rotasUsuario');

const app = express();

app.use(express.json());

app.use('/routes', rotasUsuarios);

app.listen(3000, () => {
    console.log('Servidor modularizado rodando na porta 3000 em http://localhost:3000');
});