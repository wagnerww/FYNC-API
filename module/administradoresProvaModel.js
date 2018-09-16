const Sequelize = require('sequelize');
const db = require('../config/db');

var administradoresProvaModel = db.define('administradoresProva',{
    AdmPrvCodigo:{
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
    UsuCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'usuariosModel',
            key: 'UsuCodigo'
        }
    },    
    AdmPrvEmail:Sequelize.STRING
});

module.exports = {
    administradoresProvaModel:administradoresProvaModel   
}
