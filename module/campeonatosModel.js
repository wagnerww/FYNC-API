const Sequelize = require('sequelize');
const db = require('../config/db');

var campeonatosModel = db.define('campeonatos',{
    CmpCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },    
    UsuCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'usuariosModel',
            key: 'UsuCodigo'
        }
    },
    PaiCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'paisesModel',
            key: 'PaiCodigo'
        }
    },
    EstUF: {        
        type: DataTypes.STRING,
        references: {
            model: 'estadosModel',
            key: 'EstUF'
        }
    },
    EspCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'esportesModel',
            key: 'EspCodigo'
        }
    },
    PrjCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'perfilJuridicaModel',
            key: 'PrjCodigo'
        }
    },
    CmpDescricao:Sequelize.STRING,
    CmpDscDetalhada:Sequelize.STRING,
    CmpLogo:Sequelize.STRING,
    CmpDtaCadastro:Sequelize.DATE,
    CmpDtaInicio:Sequelize.DATE,
    CmpDtaFim:Sequelize.DATE,
    CmpQtdEtapas:Sequelize.INTEGER,
    CmpRegulamento:Sequelize.STRING,
    CmpArqRegulamento:Sequelize.STRING,
    CmpHomFederacao:Sequelize.INTEGER
});

module.exports = {
    campeonatosModel:campeonatosModel   
}
