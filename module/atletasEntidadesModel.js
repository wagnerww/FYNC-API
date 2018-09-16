const Sequelize = require('sequelize');
const db = require('../config/db');

var atletasEntidadesModel = db.define('atletasentidades',{       
    PrjCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'perfilJuridicaModel',
            key: 'PrjCodigo'
        },
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
    AtlEntDtaCadastro:Sequelize.DATE
});

module.exports = {
    atletasEntidadesModel:atletasEntidadesModel   
}
