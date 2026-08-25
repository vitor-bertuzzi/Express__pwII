const express = require('express');
const app = express();


const email = "vitor.beltrami@aluno.cps.sp.gov.br"

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site.');
});


app.get('/sobre', (req, res) => {
    res.send('Sou um estudante de desenvolvimento de software');
});

app.get('/contato', (req, res) => {
    res.send(email);
});



app.listen(4000, ()=>{
    console.log('Servidor rodando no endereço http://localhost:4000');
});
