/* 
 * db: mooffice_db
 * Projeto: MONITORAMENTO DE CONSUMO DE ENERGIA
 * Descrição: DESTINADO A PROPRIETÁRIOS DE PMEs 
 QUE BUSCAM OTIMIZAR SEUS CUSTOS OPERACIONAIS, ESPECIALMENTE 
 OS RELACIONADOS AOS CONSUMO DE ENERGIA ELÉTRICA
 * Autor: ERICK SANTOS DE SOUSA 
 * Data: 06/08/2025  
 */  

CREATE DATABASE IF NOT EXISTS mooffice_db;
USE mooffice_db;

-- CREATE's das entidades
CREATE TABLE empresa (
	id_empresa INT PRIMARY KEY AUTO_INCREMENT,
    nome_empresa VARCHAR(250) NOT NULL,
    cnpj CHAR(18) UNIQUE NOT NULL,
    telefone VARCHAR(25) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    endereco VARCHAR(250) NOT NULL,
    cidade VARCHAR(250) NOT NULL,
    estado CHAR(2),
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(250) NOT NULL,
    email VARCHAR(250) UNIQUE,
    senha VARCHAR(255),
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_empresa INT NOT NULL,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id_empresa)
);

CREATE TABLE medidor (
	id_medidor INT PRIMARY KEY AUTO_INCREMENT,
    nome_medidor VARCHAR(250) NOT NULL,
    localizacao VARCHAR(250) NOT NULL,
    unidade_medida VARCHAR(250) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_empresa INT NOT NULL,
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id_empresa)
);

CREATE TABLE leituras_consumo (
	id_leitura INT PRIMARY KEY AUTO_INCREMENT,
    valor_consumo DECIMAL(12,4),
    data_hora_leitura DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_medidor INT NOT NULL,
    FOREIGN KEY (fk_medidor) REFERENCES medidor(id_medidor)
);

CREATE TABLE limites_consumo (
	id_limite INT PRIMARY KEY AUTO_INCREMENT,
    tipo_limite ENUM('Normal', 'Atenção', 'Crítico') NOT NULL,
    valor_min DECIMAL(10, 3),
    valor_max DECIMAL(10, 3),
    descricao VARCHAR(250) NOT NULL,
    data_inicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_fim DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
    fk_medidor INT,
    fk_empresa INT NOT NULL,
    FOREIGN KEY (fk_medidor) REFERENCES medidor(id_medidor),
    FOREIGN KEY (fk_empresa) REFERENCES empresa(id_empresa)
);

-- SELECT's de todas as tabelas
SELECT * FROM empresa;
SELECT * FROM usuario;
SELECT * FROM medidor;
SELECT * FROM leituras_consumo;
SELECT * FROM limites_consumo;




