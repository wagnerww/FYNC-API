const Model = require('../../module/usuariosModel');
const usuarios = require('../../Proccess/usuario/usuarios');

let inputData = {    
    insertUsuario : function(data){
        return new Promise(function(resolve, reject){           
            usuarios.proccesUsuarios.insertUsuario(data).then(function(res){
                resolve();
            }).catch(err => {
                console.log('#001-erro ao inserir o usuarios ',err);           
                reject(err);
            });
        });
    },
    updateUsuario:function(data){
        return new Promise(function(resolve, reject){
            usuarios.proccesUsuarios.updateUsuario(data).then(function(res){
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