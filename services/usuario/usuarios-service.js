const usuarios = require('../../Process/usuario/usuarios');
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
    selectUsuario: function(id){
        return new Promise(function(resolve, reject){
            usuarios.proccesUsuarios.selectUsuario(id).then(function(dataDB){
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
        let dataArray = [];
        for(let i =0; i < dataDB.length; i++){
            dataArray.push({
                id          : dataDB[i].UsuCodigo,
                Documento   : dataDB[i].UsuCPFCNPJ,
                Email       : dataDB[i].UsuEmail,
                Senha       : dataDB[i].UsuSenha,
                Status      : dataDB[i].UsuStatus,
                Nome        : dataDB[i].UsuNome,
                DtaRegistro : dataDB[i].UsuDtaRegistro
            });
        }
        resolve(dataArray);
    });
}

module.exports = {
    getData:getData,
   
}
