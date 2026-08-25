const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    const dataAtual = new Date().toISOString();
    console.log(`[${dataAtual}] Método: %{req.method} | URL: ${req.url}`);
});

function verificarToken(req, res, next){
    const token = req.headers['token'];

    if (!token || token !== 'segredo123'){
        return res.status(401).json(
            {erro: 'Acesso não autorizado.'}
        );
    }
    next();
}

app.get('/publico', (req, res) => {
    res.send('Esta rota é acessível a qualquer usuário.');
});

app.get('/area-restrita', verificarToken, (req,res) =>{
    res.send('Bem-vindo à área restrita do sistema.');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 em http://localhost:3000');
});