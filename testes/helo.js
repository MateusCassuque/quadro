/*module.exports = function(msg){
    const http = require('http')

    const atendeResquest = ((request, response) => {
        response.writeHead(200, {'content-type' : 'text/html'})
        response.write('<h1>Meu servidor Rodando</h1> <h2>Teste com h2 </h2>')
        response.write('<p> Este é um paragráfo! </p>')
        response.end()
    })

    const server = http.createServer(atendeResquest)

    var porta = 3000
    const servidorLigou = (()=>{
        console.log('Servidor Rodando na Porta ' + porta)
    })


    server.listen(porta, servidorLigou)



    
const helo = require('./helo')
const human = require('./human')

global.hoje = new Date()

console.log(global.hoje)

//helo()
human.heloServer()


console.log()
}*/