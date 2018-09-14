const Sequelize = require('sequelize');
const db = require('../config/db');

var esportesModel = db.define('esportes',{
    EspCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    EspDescricao:Sequelize.STRING,
    EspStatus:Sequelize.INTEGER
});


module.exports = {
    esportesModel:esportesModel   
}