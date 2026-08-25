module.exports = {
    listar(req, res){
        return res.json([
            {id: 1, nome: 'João da Silva'},
            {id: 2, nome: 'Bruno de Souza'}
        ]);
    },

    criar(req, res){
        const {nome} = req.body;
        return res.status(201).json(
            {mensagem: `Usuário ${nome} criado com sucesso.`}
        );
    }
};