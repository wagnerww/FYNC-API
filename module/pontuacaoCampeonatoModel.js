const Sequelize = require('sequelize');
const db = require('../config/db');

var pontuacaoCampeonatoModel = db.define('pontuacaoCampeonatos',{
    PtcCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },    
    CmpCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'campeonatosModel',
            key: 'CmpCodigo'
        },
        primaryKey: true
    },    
    PtcDescricao:Sequelize.STRING,
    PtcColocacao:Sequelize.INTEGER,
    PtcPontos:Sequelize.FLOAT(10,2)
});

module.exports = {
    pontuacaoCampeonatoModel:pontuacaoCampeonatoModel   
}
