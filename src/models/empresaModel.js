const db = require("../db/config");

function buscarCnpj(cnpj) {
    const instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;
    return db.executar(instrucaoSql);
}

function cadastrar(nome_empresa, cnpj, telefone, email, endereco, cidade, estado) {
    const instrucaoSql = `INSERT INTO empresa (nome_empresa, cnpj, telefone, email, endereco, cidade, estado) VALUES 
                                              ('${nome_empresa}, ${cnpj}, ${telefone}, ${email}, ${endereco}, ${cidade}, ${estado})'`;
    return db.executar(instrucaoSql);
}

module.exports = {
    buscarCnpj,
    cadastrar
};