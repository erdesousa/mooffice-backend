const leituraModel = require("../models/leituraModel");

function cadastrar(req, res) {
    const valor_consumo = req.body.valor_consumo;
    const fk_medidor = req.body.id_medidor;

    if (valor_consumo == undefined) {
        res.status(400).send("Valor de consumo está undefined!");
    } else if (fk_medidor == undefined) {
        res.status(400).send("Medidor vincular está undefined!");
    } else {
        leituraModel.cadastrar(valor_consumo, fk_medidor)
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