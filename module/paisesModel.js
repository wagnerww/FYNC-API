const Sequelize = require('sequelize');
const db = require('../config/db');

var paisesModel = db.define('paises',{
    PaiCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    PaiSigla:Sequelize.STRING,
    PaiDescricao:Sequelize.STRING
});



module.exports = {
    paisesModel:paisesModel   
}