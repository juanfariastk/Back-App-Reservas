const express = require('express')
const multer = require('multer')

const upload = require('./config/upload')
const sessao = require('./controllers/Sessao')
const locais = require('./controllers/Locais')
const dash = require('./controllers/LocaisUsuario')
const reserva = require('./controllers/Reservas')

const rotas = express.Router()
const up = multer(upload)

rotas.post('/sessao', sessao.store)
rotas.get('/locais', locais.index )
rotas.get('/dash', dash.show)
rotas.post('/locais', up.single('thumbnail'),locais.store)
rotas.post('/locais/:spot_id/reservas', reserva.store)

module.exports = rotas;