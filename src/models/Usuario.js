const mongoose = require('mongoose')

const usuario_schema = new mongoose.Schema({ email:String, })

module.exports = mongoose.model('Usuario',  usuario_schema)