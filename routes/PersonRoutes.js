const router = require('express').Router();
const Person = require('../models/Person');

// api rotas

router.post('/', async (req, res) => {
  // req.body
  
  const { name, salary, approved } = req.body
  
  const person = {
    name,
    salary,
    approved
  }
  
  
  if(!name){
    res.status(422).json({error: 'nome e obrigatório'})
  }
  
  if(!salary){
    res.status(422).json({error: 'salary e obrigatório'})
  }
  
  if(!approved){
    res.status(422).json({error: 'approved e obrigatório'})
  }
  
  
  // create mongoose
  try{
    //criando dados
    await Person.create(person)
   return res.status(201).json({mensagem: 'dados enviados'})
  }catch (error) {
    res.status(500).json({error: error})
  }
})


// get items api

router.get('/', async (req, res) => {
  try {
    const servidor = await Person.find()
    return res.status(200).json(servidor)
  }catch (error) {
   res.status(500).json({error: error})
  }
})

module.exports = router