const multer = require('multer')
const path = require('path')
const dados = require('./pegarDadosToken.js')
const pegarDadosToken = require('./pegarDadosToken.js')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname , '..' , 'database' , 'fotos'))
    },
    filename: function(req, file, cb) {
        const ext = path.extname(file.originalname)

        const { id } = pegarDadosToken(req.session.user.token)
        cb(null, `Foto_${id}${ext}`)
    }
});

const upload = multer({ storage: storage })
module.exports = upload