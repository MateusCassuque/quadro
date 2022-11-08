const express = require('express')

const router = express.Router();
const Servico = require('../models/Servico')
const User = require('../models/User')

const { user } = require('../config/userConfig.json')

const userAdmin = new User(user)

const num2 = 150000
let valorNum = num2.toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

const novoServico3 = new Servico('Visto de Saúde', valorNum)

const num1 = 100000
valorNum = num1.toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

const novoServico2 = new Servico('Visto de Estudo', valorNum)
 
const num = 75000
valorNum = num.toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

const novoServico1 = new Servico('Visto de Turismo', valorNum)

const subServicosCro = [
  {
    tipo: 'Agendamento',
    preco: 15000,
  },

  {
    tipo: 'Reserva Hotel',
    preco: 6000,
  },
 
  {
    tipo: 'Reserva de Vôo',
    preco: 2500,
  },

  {
    tipo: 'Formulário',
    preco: 6000,
  },

] 
const subServicos = []

const preench = (() => {
  subServicosCro.forEach(s => {
    s.preco = s.preco.toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})
    subServicos.push(s)
  })
})

router.get('/', async (req,res) => {
  if(subServicos.length == 0){
    preench()
  }

  const servicos = Servico.find().reverse()

  res.render('home', {subServicos, servicos})
})

router.get('/register', (req, res) => {
  res.render('home/createService')
})

router.post('/', async (req, res) => {

  const { nome, preco } = req.body

  const num = preco * 1 
  const valor = num.toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

  const novoServico = new Servico(nome, valor)
  res.redirect('/')
    
})

router.get('/service/:servicoId', async (req, res) => {
  const servico = Servico.findById(req.params.servicoId)
  res.render('service', { servico })
})

router.delete('/remove', (req, res) => {

})
module.exports = app => app.use('/', router); 