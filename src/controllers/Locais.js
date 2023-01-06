const local = require('../models/Local')
const usuario = require('../models/Usuario')

module.exports ={
    async index(requisicao, resposta){
        const {tech} = requisicao.query 

        const locais = await local.find({techs:tech})
        return resposta.json(locais)
    },
    
    async store(requisicao, resposta){
        const {filename} = requisicao.file
        const {company, techs, price} = requisicao.body
        const {user_id} = requisicao.headers

        const user = await usuario.findById(user_id)

        //verificando se o usuário existe 

        if(!user){
            return resposta.status(400).json({erro: 'Este usuario não existe'})
        }

        const local_fim = await local.create({ user: user_id, thumbnail: filename, company, techs: techs.split(',').map(tech => tech.trim()), price })

        return resposta.json(local_fim)
    }
}