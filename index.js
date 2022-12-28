// configurações 
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PersonRoutes = require('./routes/PersonRoutes');


// forma de ler JSON
app.use(express.urlencoded({extended: true,}))
app.use(express.json())


// rota PersonRoutes

// post
app.use('/post', PersonRoutes)

// get post
app.use('/get/post', PersonRoutes)


// rota inicial

app.get('/', (req, res) => {
  res.json({mensage: 'api criada pelo dream ❤️'})
})


// mongoose codigo

const DB_USER = "DreamStudio";
const DB_PASSWORD = encodeURIComponent("1157390000");

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.jrtn1bc.mongodb.net/dreamapi?retryWrites=true&w=majority`)
.then(() => {
console.log('mongo db ativado')
app.listen(3000, () => {
console.log('rodando api ❤️')
})
})
.catch((err) => console.log(err))


