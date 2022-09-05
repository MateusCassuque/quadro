const express = require('express')

const router = express.Router();
const Servico = require('../models/Servico')

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
  if(subServicos.length == 0){
    preench()
  }

  const { nome, preco } = req.body

  const num = preco * 1
  const valor = num.toLocaleString('pt-AO', {style: 'currency', currency: 'AOA'})

  const novoServico = new Servico(nome, valor)

  const servicos = Servico.find().reverse()

  res.render('home', {subServicos, servicos})
    
})

router.get('/service/:servicoName', async (req, res) => {
  const servico = Servico.findById(req.params.servicoName)
  res.render('service', { servico })
})

router.delete('/remove', (req, res) => {

})
module.exports = app => app.use('/', router); 