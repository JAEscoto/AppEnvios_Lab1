const { Router } = require("express")
const { GetSeguimiento, PostSeguimiento, PutSeguimiento, DeleteSeguimiento } = require("../controllers/seguimientos")
const router = Router()

router.get('/', GetSeguimiento)
router.post('/', PostSeguimiento)
router.put('/', PutSeguimiento)
router.delete('/', DeleteSeguimiento)

module.exports = router