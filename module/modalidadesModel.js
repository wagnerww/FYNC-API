const Sequelize = require('sequelize');
const db = require('../config/db');

var modalidadesModel = db.define('modalidades',{
    ModCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ModDescricao:Sequelize.STRING,
    ModStatus:Sequelize.INTEGER,
    EspCodigo: {
        type: DataTypes.INTEGER,
        references: {
            model: 'esportesModel',
            key: 'EspCodigo'
        }
    }
});

module.exports = {
    modalidadesModel:modalidadesModel   
}
