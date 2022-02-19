const { Router } = require("express")
const {  GetDetallesEnvios, PostDetallesEnvios, PutDetallesEnvios, DeleteDetallesEnvios } = require("../controllers/detallesEnvios")
const router = Router()

router.get('/', GetDetallesEnvios)
router.post('/', PostDetallesEnvios)
router.put('/', PutDetallesEnvios)
router.delete('/', DeleteDetallesEnvios)

module.exports = router