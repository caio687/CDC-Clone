
const app = require('./config-express.js')()

//informa qual porta escutar e utiliza callBack
app.listen(3000, function() {
    console.log('Subiu com sucesso!')
})