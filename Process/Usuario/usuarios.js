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
                let dataArray = [data];
                resolve(dataArray);
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
    },
    insertUsuario : function(data){
        return new Promise(function(resolve, reject){
            usuariosModel.usuariosModel.max('UsuCodigo').then(function(max){  
                data.usuariosModel.UsuCodigo = max + 1;             
                usuariosModel.usuariosModel.create(data.usuariosModel).then(function(res) {
                    resolve(res);
                }).catch(err => {              
                    reject(err);
                });
            }); 
            
        });
    },
    updateUsuario : function(data){
        return new Promise(function(resolve, reject){
            usuariosModel.usuariosModel.update(data.usuariosModel, {
                where:{UsuCodigo : data.usuariosModel.UsuCodigo}}
                ).then(function(res) {
                    resolve(res);
                }).catch(err => {              
                    reject(err);
                });
        });  
    },
    deleteUsuario : function(id){
        return new Promise(function(resolve, reject){
            usuariosModel.usuariosModel.destroy({
                where:{UsuCodigo : id}}
                ).then(function(res) {
                    resolve(res);
                }).catch(err => {              
                    reject(err);
                });
        });  
    }
    
}


module.exports ={ proccesUsuarios:proccesUsuarios }