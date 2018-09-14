//var mysql   = require('mysql');
const Sequelize = require('sequelize');


//cria conecção
const sequelize = new Sequelize('fync_devel', 'root', 'mysql', {
    host:"localhost",
    port:3306,
    dialect:'mysql',
    define:{
        timestamps: false
    }
}) 

//CASO DE ERRO DE INCOMPATIBILIDADE, RODAR NO BANCO:ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha';
/* blaaaaaaaa
var connection  =   mysql.createConnection(obj);
      
connection.connect(function(err){
    if(err){
        console.log('Houve um erro na conexão', err.stack);
    }else{
        console.log('Conexão realizada com sucesso!');
    }
});


var query = {
    select: function(sql, values){
        return new Promise(function(resolve, reject){
            connection.query(sql, values, function(err, rows){
                if(err) {
                    console.log('Houve algum erro ao buscar o usuário: ', err);
                    reject(err);
                } else {
                    resolve(rows);
                }        
            });
        });
    },
    insert: function(sql, values){
        return new Promise(function(resolve, reject){
            connection.query(sql, values).then(res => {               
                resolve();
            }).catch(err => {
                console.log('erro na sentença de select ', err.stack);
                reject(err);               
        })})
    },
    update: function(sql, values){
        console.log('update');
    },
    inicializaUsuario: function(){
        return new Promise(function(resolve, reject){
            i=2;
            
            while (i < 50) {
                let values = [];
                sql = 'INSERT INTO usuarios (`UsuCodigo`,`UsuCPFCNPJ`,`UsuEmail`,`UsuSenha`,`UsuStatus`,`UsuNome`,`UsuDtaRegistro`) '+
                'VALUES ('+i+', '+i+', "email'+i+'", "abc", 1, "usuario '+i+'", "2018-08-08 23:00:00")';
                values.push[i, i, 'email'+i, 'abc', 1, 'usuario '+i, '2018-08-08 23:00:00']
                connection.query(sql, values, function(err, rows){
                });
                i++;                
            }
                resolve();
            }).catch(err => {
                console.log('erro na sentença de select ', err.stack);
                reject(err);               
        });
    }
}
*/
module.exports = sequelize;