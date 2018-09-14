const usuarios = require('../../Proccess/usuario/usuarios');
const retornoLista = require('../retornos/estrutura-retorno-listas');

let getData = {
    selecTodosUsuariosLimit : function(skip, limit){
        return new Promise(function(resolve, reject){            
            usuarios.proccesUsuarios.selecTodosUsuariosLimit(skip, limit).then(function(dataDB){
                processaRetorno(dataDB).then(function(dataArray){
                    usuarios.proccesUsuarios.countTodosUsuarios().then(function(count){
                        retornoLista.estruturaRetorno(dataArray, count).then(function(retorno) {
                            resolve(retorno);
                    });
                });
            });
            }).catch(err => {
                console.log('#001-erro ao buscar os usuarios ',err);           
                reject(err);
            });
        });
    },
    selectUsuario: function(UsuCodigo){
        return new Promise(function(resolve, reject){
            usuarios.proccesUsuarios.selectUsuario(UsuCodigo).then(function(dataDB){
                processaRetorno(dataDB).then(function(dataArray){               
                    retornoLista.estruturaRetorno(dataArray, 1).then(function(retorno) {
                        resolve(retorno);
                    });
                });
            }).catch(err => {
                console.log('#002-erro ao buscar os usuarios ',err);           
                reject(err);
            });
        });
    }    
}

function processaRetorno(dataDB){
    return new Promise(function(resolve, reject){
        let dataArray = dataDB;
        resolve(dataArray);
    });
}

module.exports = {
    getData:getData,
   
}
