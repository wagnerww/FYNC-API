const Sequelize = require('sequelize');
const db = require('../config/db');

var cidadesModel = db.define('cidades',{
    CidCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    CidDescricao:Sequelize.STRING,
    CidCodIBGE:Sequelize.INTEGER,
    EstCodigo: {
        type: DataTypes.STRING,
        references: {
            model: 'estadosModel',
            key: 'EstCodigo'
        }
    }
});

module.exports = {
    cidadesModel:cidadesModel   
}
