const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')

const app = express()

app.set('views', __dirname + '/src/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/src/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"))

require('./src/app/routes/index')(app)

app.listen(8089, (()=>{
  console.log('SERVIDOR RONDANDO')
  console.log('ACESSE EM: http://127.0.0.1:8089')
}))