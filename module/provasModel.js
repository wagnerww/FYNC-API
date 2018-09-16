const Sequelize = require('sequelize');
const db = require('../config/db');

var provasModel = db.define('provas',{
    PrvCodigo:{
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
    CidCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'cidadesModel',
            key: 'CidCodigo'
        }
    },
    EspCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'esportesModel',
            key: 'EspCodigo'
        }
    },
    ModCodigo: {        
        type: DataTypes.INTEGER,
        references: {
            model: 'modalidadesModel',
            key: 'ModCodigo'
        }
    },
    PrvDescricao:Sequelize.STRING,
    PrvDscDetalhada:Sequelize.STRING,
    PrvDtaCadastro:Sequelize.DATE,
    PrvDtaInicio:Sequelize.DATE,
    PrvDtaFim:Sequelize.DATE,
    PrvLinkInscricao:Sequelize.STRING,
    PrvLargada:Sequelize.DATE,
    PrvEndereco:Sequelize.STRING,
    PrvRegulamento:Sequelize.STRING,
    PrvArqRegualamento:Sequelize.STRING,
    PrvLogo:Sequelize.STRING,
    PrvVideo:Sequelize.STRING,
    PrvBanner:Sequelize.STRING,
    PrvPremiacao:Sequelize.STRING,
    PrvInfraestrutura:Sequelize.STRING,
    PrvKit:Sequelize.STRING
});

module.exports = {
    provasModel:provasModel   
}
