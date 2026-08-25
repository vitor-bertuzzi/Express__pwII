const express = require('express');
const app = express();

app.use(express.json());

let tarefas = [
    {id: 1, titulo: 'Estudar Express.js', concluida: false},
    {id: 2, titulo: 'Criar uma API REST', concluida: false},
];

app.get('/tarefas', (req, res) => {
    const {titulo} = req.body;

    if(!titulo){
        return res.status(400).json({erro: 'O titulo da tarefa é obrigatório.'});
    }

    const novaTarefa = {
        id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1:1,
        titulo,
        concluida: false
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
});

app.put('/tarefas/:id', (req, res) =>{
    const {id} = req.params;
    const {concluida} = req.body;

    const tarefa = tarefas.find(item => item.id === parseInt(id));

    if(!tarefa){
        return res.status(404).json({erro: 'Tarefa não encontrada'});
    }

    if(typeof concluida === 'boolean'){
        tarefa.concluida = concluida;
    }
    res.json(tarefa);
});

app.delete('/tarefas/:id', (req, res) => {
    const{id} = req.params;
    const indice = tarefas.findIndex(item => item.id === parseInt(id));

    if(indice === -1){
        return res.status(404).json({erro: 'Tarefa não encontrada.'});
    }

    tarefas.splice(indice, 1);
    res.status(204).send();
});

app.use((req, res) => {
    res.status(404).json({erro:'Rota não encontrada na API.'});
});

app.listen(3000, () => {
    console.log('API REST de Tarefas rodando na porta 3000 em http://localhost:3000');
});