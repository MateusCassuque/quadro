const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')

const routes = require('./routes/index')
const app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"))

require('./routes/index')(app)

app.listen(3001, (()=>{
  console.log('SERVIDOR RONDANDO')
  console.log('ACESSE EM: http://127.0.0.1:3001')
}))





























/*
const http = require('http')
const fs =require('fs')
    
    const server = http.createServer((request, response)=>{
      let rota = ''

      if((request.url == '/') || (request.url == '/home')){
        rota = __dirname + '/views/index.ejs'
      }
      else if(request.url == '/home'){
        rota = __dirname + '/views/index.ejs'

      }
      else if(request.url == '/sobre'){
        rota = __dirname + '/views/sobre.ejs'
      }else{
        rota = __dirname + '/views/erro.ejs'
      }

      fs.readFile( rota, ((erro, arquivo)=>{
        if(erro) throw erro
        
        response.writeHead(200, {'Content-Type':'text/html'})
        
        response.end(arquivo)
        
      }))   
    })

    server.listen(3000, (()=>{
        console.log('Servidor Rodando..')
    }))
    */


























/*
const express = require('express')

//const routes = require('./routes')
const load = require('express-load')
const app = express()

load('models').then('controllers').then('routes').into(app)


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

// app.get('/', routes.index)
// app.get('/users', routes.user.index)


 

app.listen(3000,(()=>{
  console.log('Servidor rodando na porta 3000...')
}))
*/