const medidorModel = require("../models/medidorModel");

function cadastrar(req, res) {
    const nome_medidor = req.body.nome_medidor;
    const localizacao = req.body.localizacao;
    const unidade_medida = req.body.unidade_medida;
    const fk_empresa = req.body.id_empresa;

    if (nome_medidor == undefined) {
        res.status(400).send("Nome do medidor está undefined!");
    } else if (localizacao == undefined) {
        res.status(400).send("Localização do medidor está undefined!");
    } else if (unidade_medida == undefined) {
        res.status(400).send("Unidade de medida do medidor está undefined!");
    } else if (fk_empresa == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {
        medidorModel.cadastrar(nome_medidor, localizacao, unidade_medida, fk_empresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}