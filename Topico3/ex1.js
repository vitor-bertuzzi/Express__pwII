const express = require('express');
const app = express();

app.use(express.json());

app.get('/saudacao', (req, res) =>{
    const {nome} = req.query;
    const nomeFinal = nome ? nome : 'Convidado';
    res.send(`Olá, ${nomeFinal}!`);
});

app.get('/produtos/:id', (req, res) =>{
    const {id} = req.params;

    if(id === '10'){
        return res.json({id: 10, nome: 'Notebook', preco: 3500.00});
    }

    res.status(404).json({mensagem: 'Produto não cadastrado.'});
});

app.post('/usuarios', (req, res) => {
    const {nome, email} = req.body;

    if(!nome || !email){
        return res.status(400).json({erro: 'Nome e e-mail são obrigatórios.'});
    }

    res.status(201).json({
        mensagem: 'Usuário criado com sucesso!',
        usuario: {nome, email}
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 em http://localhost:3000');
});