const Sequelize = require('sequelize');
const db = require('../config/db');

var perfilFisicaModel = db.define('perfilfisica',{
    PrfCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    PrfTipo:Sequelize.INTEGER,
    PrfSexo:Sequelize.INTEGER,
    PrfFoto:Sequelize.STRING,
    PrfDtaNascimento:Sequelize.DATE,
    PrfGrupo:Sequelize.STRING,
    PrfDtaUltAtualizacao:Sequelize.DATE,
    PrfTelefone:Sequelize.STRING,
    CidCodigo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cidadesModel',
            key: 'CidCodigo'
        }
    },
    UsuCodigo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'usuariosModel',
            key: 'UsuCodigo'
        }
    }
});

module.exports = {
    perfilFisicaModel:perfilFisicaModel   
}
