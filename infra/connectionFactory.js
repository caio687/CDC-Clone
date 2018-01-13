const mysql = require('mysql')// chama o pacote do MySQL

function connectionFactory() {

    //Conecta no banco de dados
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'caelum',
        database: 'cdc'
    })
}

module.exports = () => connectionFactory