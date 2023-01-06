const reservas = require('../models/Reserva')

module.exports = {
    async store(requisicao, resposta){
        const {user_id} = requisicao.headers
        const {spot_id} = requisicao.params
        const {date} = requisicao.body

        const reserva = await reservas.create({ user: user_id, spot: spot_id, date  })
        
        //realizando o relacionamento com entre o Local reservado e quem foi o responsável por locar
        await (await reserva.populate('spot')).populate('user')
        return resposta.json(reserva)
    }
}