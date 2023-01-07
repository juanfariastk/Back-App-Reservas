const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const rotas = require('./routes')

const app = express()
mongoose.set("strictQuery", true)
mongoose.connect('mongodb+srv://juan:2911@cluster0.8cpvqhc.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

// requisicao.query = retorna o acesso ao parametros da query params
// requisicao.params = retorna o acesso route params
// requisicao.body = retorna o acesso ao corpo da requisição

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads' )))
app.use(rotas)

app.listen(4000)

