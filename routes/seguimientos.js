const { Router } = require("express")
const { GetSeguimiento, PostSeguimiento, PutSeguimiento, DeleteSeguimiento } = require("../controllers/seguimientos")
const router = Router()

router.get('/', GetSeguimiento)
router.post('/', PostSeguimiento)
router.put('/:idEnvio', PutSeguimiento)
router.delete('/:idEnvio', DeleteSeguimiento)

module.exports = router