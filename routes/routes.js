const bodyParser       = require('body-parser');
const restify           = require('restify');
const usuariosServices  = require('../services/usuario/listas-usuarios-service');
const usuariosInput  = require('../services/usuario/input-usuarios-services');
const cors              = require('../config/cors.config');
//const cors = require('../config/cors')

const port = 8080;
const server = restify.createServer();

   
  server.pre(cors.preflight)
  server.use(cors.actual)

server.post('/listarUsuarios',  function(request, response){
    console.log('limit', request.body.limit);
    usuariosServices.getData.selecTodosUsuariosLimit(request.body.skip, request.body.limit).then(function(res){        
        trataRetornos(true, '', res).then(retornoAPI => {     
        response.send(200, retornoAPI);
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

server.post('/insertUsuario', function(request, response){
    usuariosInput.inputData.insertUsuario(request.body).then(function(res){        
        trataRetornos(true, '', res).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    }).catch(err => {
        console.log('erro ao inserir os usários', err);
        trataRetornos(false, err, []).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    });
});

server.put('/updateUsuario', function(request, response){
    usuariosInput.inputData.updateUsuario(request.body).then(function(res){        
        trataRetornos(true, '', res).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    }).catch(err => {
        console.log('erro ao inserir os usários', err);
        trataRetornos(false, err, []).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    });
});

server.del('/deleteUsuario', function(request, response){
    usuariosInput.inputData.deleteUsuario(request.body).then(function(res){        
        trataRetornos(true, '', res).then(retornoAPI => {            
            response.send(retornoAPI);
        });
    }).catch(err => {
        console.log('erro ao inserir os usários', err);
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
        let retorno = {};
        if(isSucces){
            retorno ={
                status:100,
                mensagem : 'Sucesso',
                retornos:data
            };
        } else {
            retorno = {
                status:101,
                mensagem : 'Falha: '+erro,
                retornos:[]
            };
        }
        resolve(retorno);
    });
}

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

server.listen(port, () => {
    console.log("Servidor em pé!");
});

module.exports = server;
