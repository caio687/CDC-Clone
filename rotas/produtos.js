//Libs
//const connection = require('../infra/connectionFactory')()
const ProdutosDAO = require('../dao/ProdutosDAO.js')

//Module Export
module.exports = function(app) {
    

    //Salva livros
    app.get('/produtos/cadastro', function(req, res) {        
        res.render('./produtos/form')
    })
    app.post('/produtos', function(req, res) {
        const connection = app.infra.connectionFactory()
        const produtosDAO = new app.dao.ProdutosDAO(connection)

        //Para salvar um produto
        const produto = req

        //Validando fom
        req.assert('titulo', 'Titulo é obrigatório!').notEmpty()
        req.assert('preco', 'Preço deve ser um numero').isFloat()

        let errors = req.validationErrors();

        if (errors) {
            console.log("Erro de validação!")
            res.format({
                html: function() {
                    res.status(400).render('produtos/form', {validationErrors: errors})
                },
                json: function() {
                    res.status(400).send(errors)
                }
            })
            
            return
        }

        produtosDAO.salva(produto, function(err) {
            res.redirect('/produtos')
        })
    })


    //Lista produto
    app.get('/produtos', function(req, res) {
        const connection = app.infra.connectionFactory()
        const produtosDAO = new app.dao.ProdutosDAO(connection)

        produtosDAO.lista(function(err, result){
            //entregando em outro formato
            res.format({
                html: () => res.render('produtos/lista.ejs', {produtos: result })
                ,json: () => res.send({result})                
            })
            
            res.render('produtos/lista', { produtos: result })
        })
    })



    //Teste
    app.get('/produtos/:id', function(req, res){
        const connection = require('../infra/connectionFactory')()

        const idDoLivro = req.params.id

        //Usa a "?" para colcar uma variavel no WHERE
        connection.query(`SELECT * FROM livros WHERE id = ?`, idDoLivro,
            function(err, result){
                res.send(result)
        })

        connection.end()
    })
} 

// res.send(`n
        //     <html>
        //         <head>
        //             <title>Casa do Código - ${pagina}</title>
        //         </head>
        //         <body>
        //             <h1>${pagina}</h1>
        //             <p>Livros e mais!!</p>
        //             <ul>
        //                 ${produtos.join(', ')}
        //             </ul>
        //         </body>
        //     </html>    
        // `)