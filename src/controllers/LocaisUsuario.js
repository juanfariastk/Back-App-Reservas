const local = require('../models/Local')

module.exports ={
   async show(requisicao, resposta){
        const {user_id} = requisicao.headers

        //buscando os locais de um usuario 
        const locais = await local.find({user: user_id})
        return resposta.json(locais)
    }
}