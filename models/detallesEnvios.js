class detalleEnvios {
    constructor (id, idEnvio, idPaquetes){
        this.id = id
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
}