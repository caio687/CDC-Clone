//Produtos
//Module Export
module.exports = function(app) {
    app.get('/produtos', function(req, res) {

        const produtos = ['Livro Node', 'Livro JS', 'Livro CSS', 'Livro HTML']
        res.render('produtos/lista', {produtos:produtos})

    })
} 

// res.send(`
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