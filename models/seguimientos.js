class Seguimientos {
    constructor(idEnvio, fecha, hora, lugar){
        this.idEnvio = idEnvio
        this.fecha = fecha
        this.hora = hora
        this.lugar = lugar
    }
}

class ListadoSeguimientos {
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