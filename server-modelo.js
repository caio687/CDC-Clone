
//Pega o modulo HTTP do Node
const http = require('http')

//Cria o servifor HTTP
const server = http.createServer(function(request, response) {

    //Criar Rotas (Router na mão.. :> )
    const rotas = {
        '/' : '<h1>Home</h1>',
        '/produtos' : '<h1>Produtos</h1>'
    }

    if (rotas[request.url]) {
        response.end(rotas[request.url])
    } else {
        response.writeHead(404, {
            'Content-type': 'http'
        })
        response.end('<h1>Url incorreta</h1>')
    }

})

//localhost:porta
//Chamada de Retorno "CallBack"
server.listen(3000, 'localhost', function terminou() {
    console.log('Funfou, derruba com Ctrl+C');
})
