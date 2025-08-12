const limiteModel = require("../models/limiteModel");

function cadastrar(req, res) {
    const tipo_limite = req.body.tipo_limite;
    const valor_min = req.body.valor_min;
    const valor_max = req.body.valor_max;
    const descricao = req.body.descricao;
    const fk_medidor = req.body.id_medidor;
    const fk_empresa = req.body.id_empresa;

    if (tipo_limite == undefined) {
        res.status(400).send("O tipo de limite está undefined!");
    } else if (valor_min == undefined) {
        res.status(400).send("O valor mínimo está undefined!");
    } else if (valor_max == undefined) {
        res.status(400).send("O valor máximo está undefined!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está undefined!");
    } else if (fk_medidor == undefined) {
        res.status(400).send("Seu medidor a vincular está undefined!");
    } else if (fk_empresa == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {
        limiteModel.cadastrar(tipo_limite, valor_min, valor_max, descricao, fk_medidor, fk_empresa)
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
};