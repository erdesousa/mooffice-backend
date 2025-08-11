const db = require("../db/config");

function cadastrar(nome_medidor, localizacao, unidade_medida, fk_empresa) {
    const instrucaoSql = `INSERT INTO medidor (nome_medidor, localizacao, unidade_medida, fk_empresa) VALUES 
                                              ('${nome_medidor}', '${localizacao}', '${unidade_medida}', '${fk_empresa}')`;
                                              
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return db.executar(instrucaoSql);
}

module.exports = {
    cadastrar
}