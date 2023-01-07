const mongoose = require('mongoose')

const local_schema = new mongoose.Schema({ thumbnail: String, company: String, price: Number, techs: [String], user:{ type: mongoose.Schema.Types.ObjectId, ref:'Usuario'}}, { toJSON:{ virtuals: true, } } )

local_schema.virtual('thumbnail_url').get(function(){
    return `http://localhost:4000/files/${this.thumbnail}`
})
module.exports = mongoose.model('Local',  local_schema)