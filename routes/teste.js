const express = require('express')

const router = express.Router();

const Servico = require('../models/Servico')

router.get('/', async (req,res) => {
  const servico = new Servico('Turismo', '45. 000,00 AOA')
  const servico1 = new Servico('Formação', 12000)

  const servicos = Servico.find()
  console.log(servico)
  console.log(servico1)
  console.log('=====================================')
  
  console.log(servicos)

  res.render('teste', {servico})
})

// router.post('/register', async (req, res) => {
    
// })

// router.post('/authenticate', async (req, res) => {
    

// })

module.exports = app => app.use('/teste', router); 