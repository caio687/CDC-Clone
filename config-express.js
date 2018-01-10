
    // Chamando o Express para rotas e inicia o servidor
    const express = require('express')
    


    module.exports = function() {
        const app = express()        
        app.set('view engine', 'ejs') // Informa(Config) qual view default enginer vamos usar

        //Rotas
        require('./rotas/home.js') (app)
        require('./rotas/produtos.js') (app)

        return app
    }
