const mongoose = require('mongoose')

const local_schema = new mongoose.Schema({ thumbnail: String, company: String, price: Number, techs: [String], user:{ type: mongoose.Schema.Types.ObjectId, ref:'Usuario'}})

module.exports = mongoose.model('Local',  local_schema)