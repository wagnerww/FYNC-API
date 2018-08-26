const usuariosModel = require('../../module/usuariosModel');


let proccesUsuarios = { 
    countTodosUsuarios : function(){
        return new Promise(function(resolve, reject){
            usuariosModel.usuariosModel.count().then(function(data) {               
                resolve(data);
            }).catch(err => {              
                reject(err);
            });
        }); 
    },
    selectUsuario : function(id){
        return new Promise(function(resolve, reject){
            usuariosModel.usuariosModel.findById(id).then(function(data) {               
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        });   
    },
    selecTodosUsuariosLimit : function(skip, limit){
        return new Promise(function(resolve, reject){  
            usuariosModel.usuariosModel.findAll({offset:skip,limit:limit}).then(function(data) {
                resolve(data);
            }).catch(err => {              
                reject(err);
            });
        });
    }
}


module.exports ={ proccesUsuarios:proccesUsuarios }