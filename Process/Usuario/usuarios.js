const conn = require('../../config/db');
const bodyParser = require('body-parser');

function countTodosUsuarios(){
    return new Promise(function(resolve, reject){
        const sql ='select count(*)  as count from usuarios';
         conn.select(sql).then(function(data) {            
            resolve(data);
        }).catch(err => {              
            reject(err);
        });   
    }); 
}

function selectUsuarios(id){
    return new Promise(function(resolve, reject){       
        let values = [id];
         const sql ='select * from usuarios where usucodigo = ?';
         conn.select(sql, values).then(function(data) {            
            resolve(data);
        }).catch(err => {              
            reject(err);
        });   
    });   
}

function selecTodosUsuariosLimit(skip, limit){
    return new Promise(function(resolve, reject){        
        let res = {};
        const sql ='select * from usuarios limit '+skip+','+limit;
         conn.select(sql).then(function(data) {            
            resolve(data);
        }).catch(err => {              
            reject(err);
        });   
    });
}


module.exports ={ selecTodosUsuariosLimit:selecTodosUsuariosLimit, countTodosUsuarios:countTodosUsuarios,
 selectUsuarios:selectUsuarios
 }