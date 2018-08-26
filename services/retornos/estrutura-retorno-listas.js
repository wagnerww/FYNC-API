
function montaRetornoListas(dataArray, qtdTotalRegistros){
    return new Promise(function(resolve, reject){
        let detalhes = {
            totalRegistros:qtdTotalRegistros
        };

        let retorno = {
            data:dataArray,
            details:detalhes
        };
        resolve(retorno);
    });
}


module.exports = {
    estruturaRetorno:montaRetornoListas,
   
}