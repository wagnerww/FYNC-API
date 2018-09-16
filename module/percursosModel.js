const Sequelize = require('sequelize');
const db = require('../config/db');

var percursosModel = db.define('percursos',{
    PerCodigo:{
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
    PerPntCampeonato:Sequelize.INTEGER,
    PerDescricao:Sequelize.STRING,
    PerDscDetalhada:Sequelize.STRING,
    PerStatus:Sequelize.INTEGER,
    PerDistancia:Sequelize.FLOAT,
    PerQtdVoltas:Sequelize.FLOAT,
    PerQtdAltimetria:Sequelize.FLOAT,
    PerObservacoes:Sequelize.STRING
});

module.exports = {
    percursosModel:percursosModel   
}
