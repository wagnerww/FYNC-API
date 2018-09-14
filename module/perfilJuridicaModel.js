const Sequelize = require('sequelize');
const db = require('../config/db');

var perfilJuridicaModel = db.define('perfiljuridica',{
    PrjCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    PrjDesDetalhada:Sequelize.STRING,
    PrjTipo:Sequelize.INTEGER,
    PrjLogo:Sequelize.STRING,
    PrjDtaFundacao:Sequelize.DATE,
    PrjNomResponsavel:Sequelize.STRING,
    PrjEmaResponsavel:Sequelize.STRING,
    PrjCPFResponsavel:Sequelize.STRING,
    PrfDtaUltAtualizacao:Sequelize.DATE,    
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
    perfilJuridicaModel:perfilJuridicaModel   
}
