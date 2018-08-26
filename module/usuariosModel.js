const Sequelize = require('sequelize');
const db = require('../config/db');

var usuariosModel = db.define('usuarios',{
    UsuCodigo:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    UsuCPFCNPJ:Sequelize.STRING,
    UsuEmail:Sequelize.STRING,
    UsuSenha:Sequelize.STRING,
    UsuStatus:Sequelize.INTEGER,
    UsuNome:Sequelize.STRING,
    UsuDtaRegistro:Sequelize.DATE 
});



module.exports = {
    usuariosModel:usuariosModel   
}