
// Chamando o Express para rotas e inicia o servidor
// Utilizando bodyParsel
// Utilizando Express Validator
const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const load = require('express-load')

// Exportando configuração
module.exports = function() {
    const app = express()
    app.set('view engine', 'ejs') // Informa qual view default enginer vamos usar
     
    // Middleware/Interceptador
    app.use(express.static('./public'))    
    app.use(bodyParser.urlencoded({extended: true})) // Extendend - para receber objetos complexos
    app.use(expressValidator()) // Express-Validator

    // Rotas
    // require('./rotas/home.js') (app)
    // require('./rotas/produtos.js') (app)
    load('rotas')
        .then('infra')
        .then('dao')
        .into(app)

    // Middleware/Interceptador ==> de tratamento de erro
    app.use(function(req, res, next) {
        res.status(404).send('Pagina 404 da URL: ' + req.originalUrl)
        next()
    })
    app.use(function(err, req, res, next) {
        res.status(500).send('Erro Banco de dados: ' + err)
        next()
    })

    return app
}
