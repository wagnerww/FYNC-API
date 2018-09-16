const Sequelize = require('sequelize');
const db = require('../config/db');

var contatosProvaModel = db.define('contatosProva',{
    CtpCodigo:{
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
    UsuCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'usuariosModel',
            key: 'UsuCodigo'
        }
    },    
    CtpStatus:Sequelize.INTEGER,
    CtpDtaCadastro:Sequelize.DATE
});

module.exports = {
    contatosProvaModel:contatosProvaModel   
}
