const Model = require('../../module/usuariosModel');
const usuarios = require('../../Process/usuario/usuarios');

let inputData = {    
    insertUsuario : function(data){
        return new Promise(function(resolve, reject){
            Model.usuariosModel.UsuCPFCNPJ      = data.Documento,
            Model.usuariosModel.UsuEmail        = data.Email,
            Model.usuariosModel.UsuSenha        = data.Senha,
            Model.usuariosModel.UsuNome         = data.Nome,
            Model.usuariosModel.UsuStatus       = 1,        
            Model.usuariosModel.UsuDtaRegistro  = '2018-08-08 12:00:00'        
            usuarios.proccesUsuarios.insertUsuario(Model).then(function(res){
                resolve();
            }).catch(err => {
                console.log('#001-erro ao inserir o usuarios ',err);           
                reject(err);
            });
        });
    },
    updateUsuario:function(data){
        return new Promise(function(resolve, reject){
            Model.usuariosModel.UsuCodigo       = data.id
            Model.usuariosModel.UsuCPFCNPJ      = data.Documento,
            Model.usuariosModel.UsuEmail        = data.Email,
            Model.usuariosModel.UsuSenha        = data.Senha,
            Model.usuariosModel.UsuNome         = data.Nome
            usuarios.proccesUsuarios.updateUsuario(Model).then(function(res){
                resolve();
            }).catch(err => {
                console.log('#002-erro ao editar o usuario ',err);           
                reject(err);
            });
        });
    },
    deleteUsuario:function(id){
        return new Promise(function(resolve, reject){
            usuarios.proccesUsuarios.deleteUsuario(id).then(function(res){
                resolve();
            }).catch(err => {
                console.log('#002-erro ao editar o usuario ',err);           
                reject(err);
            });
        });
    }
}

module.exports = {
    inputData:inputData   
}