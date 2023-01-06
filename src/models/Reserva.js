const mongoose = require('mongoose')

const reserva = new mongoose.Schema({ date:String, approved:Boolean, user:{ type: mongoose.Schema.Types.ObjectId, ref:'Usuario' }, spot:{ type:mongoose.Schema.Types.ObjectId, ref:'Local' } })

module.exports = mongoose.model('Reserva',  reserva)