const Sequelize = require('sequelize');
const db = require('../config/db');

var integracoesModel = db.define('integracoes',{
    IntCodigo:{
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
    IntSistema:Sequelize.STRING,
    IntParametros:Sequelize.STRING,
    IntStatus:Sequelize.INTEGER,
    IntDtaCadastro:Sequelize.DATE
});

module.exports = {
    integracoesModel:integracoesModel   
}
