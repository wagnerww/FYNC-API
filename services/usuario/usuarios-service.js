const usuarios = require('../../Process/usuario/usuarios');

let getData = {
    selecTodosUsuariosLimit : function(skip, limit){
        return new Promise(function(resolve, reject){            
            usuarios.proccesUsuarios.selecTodosUsuariosLimit(skip, limit).then(function(dataDB){
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
                    })
                }
                
                usuarios.proccesUsuarios.countTodosUsuarios().then(function(count){   
                    let countUsuario = 0;
                    countUsuario     = count;
                    
                    let detalhes = {
                        totalRegistros:countUsuario
                    };
                    
                    let retorno = {
                        data:dataArray,
                        details:detalhes
                    };

                    resolve(retorno);     
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
                let dataArray = [];                
                dataArray.push({
                    id          : dataDB.UsuCodigo,
                    Documento   : dataDB.UsuCPFCNPJ,
                    Email       : dataDB.UsuEmail,
                    Senha       : dataDB.UsuSenha,
                    Status      : dataDB.UsuStatus,
                    Nome        : dataDB.UsuNome,
                    DtaRegistro : dataDB.UsuDtaRegistro
                });                
               
                let countUsuario = 1;               
                
                let detalhes = {
                    totalRegistros:countUsuario
                };
                console.log('dataArray ',dataArray);
                let retorno = {
                    data:dataArray,
                    details:detalhes
                };

                resolve(retorno);
                  
            }).catch(err => {
                console.log('#001-erro ao buscar os usuarios ',err);           
                reject(err);
            });
        });
    }
    
}


module.exports = {
    getData:getData,
   
}
