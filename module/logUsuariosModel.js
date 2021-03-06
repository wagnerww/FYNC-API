const Sequelize = require('sequelize');
const db = require('../config/db');

var logUsuariosModel = db.define('logusuarios',{
    LogUsrCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },    
    UsuCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'usuariosModel',
            key: 'UsuCodigo'
        },
        primaryKey: true
    },
    LogUsrDtaRegistro:Sequelize.DATE,
    LogUsrDescricao:Sequelize.STRING,
    LogUsrObservacao:Sequelize.STRING,
    LogUsrTabela:Sequelize.STRING,
    LogUsrTipAcao:Sequelize.INTEGER
});

module.exports = {
    logUsuariosModel:logUsuariosModel   
}
