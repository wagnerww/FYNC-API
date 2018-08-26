//const express = require('express');
const bodyParser       = require('body-parser');
const restify           = require('restify');
const usuariosServices  = require('../services/usuario/usuarios-service');
const usuarioModel   = require('../module/usuariosModel');
//const router = server;

const port = 3000;
const server = restify.createServer();


server.post('/listarUsuarios', function(request, response){
    usuariosServices.getData.selecTodosUsuariosLimit(request.body.skip, request.body.limit).then(function(res){        
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

server.post('/listarUsuario', function(request, response){
    usuariosServices.getData.selectUsuario(request.body.id).then(function(res){        
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

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

server.listen(3000, () => {
    console.log("Servidor em pé!");
});


module.exports = server;
