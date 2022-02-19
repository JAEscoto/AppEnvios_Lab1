const {Router} = require('express');
const { GetPrecios, PostPrecios, PutPrecios, DeletePrecios } = require('../controllers/precios');
//Uso {Router} para destructurar un objeto y solo obtener lo que ocupo de el
const router = Router();
//Inicializo la funcion Router
router.get('/', GetPrecios)
router.post('/', PostPrecios)
router.put('/', PutPrecios)
router.delete('/', DeletePrecios)

module.exports = router
