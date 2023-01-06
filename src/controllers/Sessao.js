const usuario = require('../models/Usuario')
module.exports = {
    async store(requisicao, resposta){
        const {email} = requisicao.body

        //logica que impede a criação de novos ID para um mesmo email cadastrado
        let user = await usuario.findOne({email})

        if (!user){
            const user = await usuario.create({email})
        }
        // const user = await usuario.create({email})

        return resposta.json(user)
    }
};