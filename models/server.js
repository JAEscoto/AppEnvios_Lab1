const express = require('express');
const { reset } = require('nodemon');

class Server{
    constructor(){
        this.app = express()
        this.routes();
    }

    routes() {
        this.app.use('/precios', require('../routes/precios'))
        this.app.use('/paquetes', require('../routes/paquetes'))
        this.app.use('/envios', require('../routes/envios'))
        this.app.use('/detallesEnvios', require('../routes/detallesEnvios'))
        this.app.use('/seguimiento', require('../routes/seguimientos'))
        //Continuar con los demas
    }
    
    listen() {
        this.app.listen(process.env.PORT, ()=>
            console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT))
    }
}

module.exports = Server