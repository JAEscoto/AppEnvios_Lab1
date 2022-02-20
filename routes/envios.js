const { Router } = require('express')
const { GetEnvios, PostEnvios, PutEnvios, DeleteEnvios } = require('../controllers/envios')
const router = Router()

router.get('/', GetEnvios)
router.post('/', PostEnvios)
router.put('/:id', PutEnvios)
router.delete('/:id', DeleteEnvios)

module.exports = router