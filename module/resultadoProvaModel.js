const Sequelize = require('sequelize');
const db = require('../config/db');

var resultadoProvaModel = db.define('resultadoprova',{
    RspCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },    
    PrvCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'provasModel',
            key: 'PrvCodigo'
        },
        primaryKey: true
    },
    PerCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'percursosModel',
            key: 'PerCodigo'
        },
        primaryKey: true
    },
    CatCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'categoriasModel',
            key: 'CatCodigo'
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
    RspColocacao:Sequelize.INTEGER,
    RspTempo:Sequelize.DATE,
    RspDesclassificado:Sequelize.INTEGER,
    RspObservacao:Sequelize.STRING
});

module.exports = {
    resultadoProvaModel:resultadoProvaModel   
}
