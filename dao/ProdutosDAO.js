// Data Access Object

//Utilizando classe

class ProdutosDAO {
    constructor(connection) {
        this._connection = connection        
    }
    lista(cb) {
        this._connection.query('SELECT * FROM livros', cb)
    }
    salva(produto, callback) {
        this._connection.query('INSERT INTO livros SET ?', produto, callback)
    }
}

module.exports = () => ProdutosDAO