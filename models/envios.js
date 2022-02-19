class Envios {
    constructor(codigo, fecha, tracking, origen, destino, emisor, destinatario) {
        this.id = codigo
        this.codigo = codigo
        this.fecha = fecha
        this.tracking = tracking
        this.origen = origen
        this.destino = destino
        this.emisor = emisor
        this.destinatario = destinatario
    }
}

class ListadoEnvios {
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