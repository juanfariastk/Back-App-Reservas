const multer = require('multer')
const path = require('path')

module.exports = { storage: multer.diskStorage( {destination:path.resolve(__dirname, '..', '..', 'uploads',), filename: (requisicao, arq, call) =>{
    const dado_ext = path.extname(arq.originalname)
    const nome_arq = path.basename(arq.originalname, dado_ext)

    call(null, `${nome_arq}-${Date.now()}${dado_ext}` )
} } ) }