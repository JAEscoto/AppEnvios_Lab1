const { Router } = require("express")
const {  GetDetallesEnvios, PostDetallesEnvios, PutDetallesEnvios, DeleteDetallesEnvios } = require("../controllers/detallesEnvios")
const router = Router()

router.get('/', GetDetallesEnvios)
router.post('/', PostDetallesEnvios)
router.put('/:id', PutDetallesEnvios)
router.delete('/:id', DeleteDetallesEnvios)

module.exports = router