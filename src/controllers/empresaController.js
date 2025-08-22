const empresaModel = require("../models/empresaModel");

function buscarCnpj(req, res) {
    const cnpj = req.body.cnpj;
    
    empresaModel.buscarCnpj(cnpj).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function cadastrar(req, res) {
    const nome_empresa = req.body.nome_empresa;
    const cnpj = req.body.cnpj;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const endereco = req.body.endereco;
    const cidade = req.body.cidade;
    const estado = req.body.estado;

    empresaModel.buscarCnpj(cnpj).then((resultado) => {
        if (resultado.length > 0) {
            res.status(401).json({ mensagem: `A empresa com o CNPJ: ${cnpj} já existe` });
        } else {
            empresaModel.cadastrar(nome_empresa, cnpj, telefone, email, endereco, cidade, estado).then((resultadoInsert) => {

                const id = resultadoInsert.insertId; 

                const empresaCriada = {
                    id_empresa: id,
                    nome_empresa,
                    cnpj,
                    telefone,
                    email,
                    endereco,
                    cidade,
                    estado
                };
                
                res.status(201).json({ 
                    success: true,
                    message: "Empresa cadastrada com sucesso",
                    data: empresaCriada
                });
            });
        }
    });
}

module.exports = {
    buscarCnpj,
    cadastrar
}