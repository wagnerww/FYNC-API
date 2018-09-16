const Sequelize = require('sequelize');
const db = require('../config/db');

var resultadosCampeonatoModel = db.define('resultadosCampCampeonatos',{
    ResCmpCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },    
    CmpCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'campeonatosModel',
            key: 'CmpCodigo'
        },
        primaryKey: true
    },
    EtaCmpCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'etapasCampeonatoModel',
            key: 'EtaCmpCodigo'
        },
        primaryKey: true
    },
    CatCmpCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'categoriasCampeonatoModel',
            key: 'CatCmpCodigo'
        },
        primaryKey: true
    },
    UsuCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'usuariosModel',
            key: 'UsuCodigo'
        }
    },
    ResCmpColocacao:Sequelize.INTEGER,
    ResCmpTempo:Sequelize.DATE,
    ResCmpDesclassificado:Sequelize.INTEGER,
    ResCmpObservacao:Sequelize.STRING
});

module.exports = {
    resultadosCampeonatoModel:resultadosCampeonatoModel   
}
