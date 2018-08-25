const usuarios = require('../Usuario/usuarios');


let getAllCount = { 
    countTodosUsuarios:function(){
        return new Promise(function(resolve, reject){
            usuarios.countTodosUsuarios().then(function(data){                
                resolve(data[0].count);                
            }).catch(err => {
                console.log('#002-erro ao contar os usuarios ',err);           
                reject(err);
            });
        });
    }
}

module.exports = {
    getCount:getAllCount,
   
}
