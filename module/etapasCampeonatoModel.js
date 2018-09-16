const Sequelize = require('sequelize');
const db = require('../config/db');

var etapasCampeonatoModel = db.define('etapasCampeonatos',{
    EtaCmpCodigo:{
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
    PrvCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'provasModel',
            key: 'PrvCodigo'
        }
    }
});

module.exports = {
    etapasCampeonatoModel:etapasCampeonatoModel   
}
