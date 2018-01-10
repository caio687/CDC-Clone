//Home
//Module Exports
module.exports = function(app) {

   
    app.get('/', function home(request, response) {
        response.send('<h1>Home</h1>')
    })

}