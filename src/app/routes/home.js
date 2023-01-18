const express = require('express')

const router = express.Router();

router.get('/', async (req,res) => {
  try {
    res.status(200).render('pages/home')
  } catch (error) {
    
  }
})

// router.get('/atlantico', async (req,res) => {
//   res.render('atlantico')
// })

module.exports = app => app.use('/', router); 