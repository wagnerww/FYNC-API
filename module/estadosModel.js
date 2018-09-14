const Sequelize = require('sequelize');
const db = require('../config/db');

var estadosModel = db.define('estados',{
    EstCodigo:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    EstDescricao:Sequelize.STRING,
    PaiCodigo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'paisesModel',
            key: 'PaiCodigo'
        }
    }
});



module.exports = {
    estadosModel:estadosModel   
}
