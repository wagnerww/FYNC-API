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
                data.UsuCodigo      = max + 1;
                data.UsuStatus      = 1;
                data.UsuDtaRegistro = '2018-08-08 22:00:00';
                usuariosModel.usuariosModel.create(data).then(function(res) {
                    resolve(res);
                }).catch(err => {              
                    reject(err);
                });
            }); 
            
        });
    },
    updateUsuario : function(data){
        return new Promise(function(resolve, reject){
            usuariosModel.usuariosModel.update(data, {
                where:{UsuCodigo : data.UsuCodigo}}
                ).then(function(res) {
                    resolve(res);
                }).catch(err => {
                    reject(err);
                });
        });  
    },
    deleteUsuario : function(UsuCodigo){
        return new Promise(function(resolve, reject){
            usuariosModel.usuariosModel.destroy({
                UsuCodigo:UsuCodigo}
                ).then(function(res) {
                    resolve(res);
                }).catch(err => {              
                    reject(err);
                });
        });  
    }
    
}


module.exports ={ proccesUsuarios:proccesUsuarios }