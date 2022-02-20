class Paquetes {
    constructor(id, descripcion, peso, volumen, clasificacion){
        this.id = id
        this.descripcion = descripcion
        this.peso = peso
        this.volumen = volumen
        this.clasificacion = clasificacion
    }
}

class ListadoPaquetes {
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