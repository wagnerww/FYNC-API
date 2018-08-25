//const express = require('express');
const restify           = require('restify');
const usuariosServices  = require('../services/usuario/usuarios-service');
const db               = require('../config/db');
//const router = server;

const port = 3000;
const server = restify.createServer();

server.post('/listarUsuarios/:skip/:limit', function(request, response){
    usuariosServices.getData.selecTodosUsuariosLimit(request.params.skip, request.params.limit).then(function(res){        
        trataRetornos(true, '', res).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    }).catch(err => {
        console.log('erro ao retornar os usários', err);
        trataRetornos(false, err, []).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    });
});

server.post('/listarUsuario/:id', function(request, response){
    usuariosServices.getData.selectUsuario(request.params.id).then(function(res){        
        trataRetornos(true, '', res).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    }).catch(err => {
        console.log('erro ao retornar os usários', err);
        trataRetornos(false, err, []).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    });
});


server.get('/init', function(request, response){
    db.inicializaUsuario().then();
});

function trataRetornos(isSucces, erro, data){
    return new Promise(function(resolve, reject){        
        let retorno = [];
        if(isSucces){
            retorno.push({
                status:100,
                mensagem : 'Sucesso',
                retornos:data
            });
        } else {
            retorno.push({
                status:101,
                mensagem : 'Falha: '+erro,
                retornos:[]
            });
        }
        resolve(retorno);
    });
}

server.listen(3000, () => {
    console.log("Servidor em pé!");
});


module.exports = server;
