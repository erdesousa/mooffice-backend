const db = require("../db/config");

function cadastrar(tipo_limite, valor_min, valor_max, descricao, fk_medidor, fk_empresa) {
    const instrucaoSql = `INSERT INTO limites_consumo (tipo_limite, valor_min, valor_max, descricao, fk_medidor, fk_empresa) VALUES
                                                      ('${tipo_limite}', '${valor_min}', '${valor_max}', '${descricao}', '${fk_medidor}', '${fk_empresa}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return db.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};