const Sequelize = require('sequelize');
const db = require('../config/db');

var categoriasCampeonatoModel = db.define('pontuacaoCampeonatos',{
    CatCmpCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },    
    CmpCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'campeonatosModel',
            key: 'CmpCodigo'
        }
    },    
    CatCmpDescricao:Sequelize.STRING,
    CatCmpDscDetalhada:Sequelize.STRING,
    CatCmpStatus:Sequelize.INTEGER,
    CatCmpObservacoes:Sequelize.STRING,
    CatCmpAnoInicial:Sequelize.INTEGER,
    CatCmpAnoFinal:Sequelize.INTEGER,
    CatCmpTipEnquadramento:Sequelize.INTEGER,
    CatCmpSexo:Sequelize.INTEGER
});

module.exports = {
    categoriasCampeonatoModel:categoriasCampeonatoModel   
}
