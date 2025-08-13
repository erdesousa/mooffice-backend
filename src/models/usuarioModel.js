const db = require("../db/config");

function cadastrar(nome, email, senha, fkEmpresa){
    const instrucaoSql = `INSERT INTO usuario (nome, email, senha, fk_empresa) VALUES ('${nome}', '${email}', '${senha}', '${fkEmpresa}');`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return db.executar(instrucaoSql);
}

function login(email, senha) {
    const instrucaoSql = `SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return db.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    login
};