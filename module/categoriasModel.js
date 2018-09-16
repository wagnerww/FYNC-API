const Sequelize = require('sequelize');
const db = require('../config/db');

var categoriasModel = db.define('categorias',{
    CatCodigo:{
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
    CatDescricao:Sequelize.STRING,
    CatStatus:Sequelize.INTEGER,
    CatObservacao:Sequelize.STRING,
    CatAnoInicial:Sequelize.INTEGER,
    CatAnoFinal:Sequelize.INTEGER,
    CatTipEnquadramento:Sequelize.INTEGER,
    CatSexo:Sequelize.INTEGER
});

module.exports = {
    categoriasModel:categoriasModel   
}
