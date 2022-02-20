const { v4: uuidv4 } = require('uuid');

class detalleEnvios {
    constructor (id, idEnvio, idPaquetes){
        this.id = uuidv4()
        this.idEnvio = idEnvio
        this.idPaquetes = idPaquetes
    }
}

class ListadoDetalleEnvios {
    constructor() {
        this._listado = {};
    }
    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    cargarTareasFromArray(datos = []) {
        datos.forEach(detalleEnvio => {
            this._listado[detalleEnvio.id] = detalleEnvio;
        });
    }

    crearDetalleEnvio(datos) {
        const detalleEnvio = new detalleEnvios(
            datos.id,
            datos.idEnvio,
            datos.idPaquetes);
        this._listado[detalleEnvio.id] = detalleEnvio;
    }
}

module.exports = {
    ListadoDetalleEnvios
}