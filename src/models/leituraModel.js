const db = require("../db/config");

function cadastrar(valor_consumo, fk_medidor) {
    const instrucaoSql = `INSERT INTO leituras_consumo (valor_consumo, fk_medidor) VALUES ('${valor_consumo}', '${fk_medidor}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return db.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}