class Precios {
    constructor(id, cantidad, valor, estado){
        this.id = id
        this.cantidad = cantidad
        this.valor = valor
        this.estado = estado
    }
}

class ListadoPrecios{
    constructor(){
        this._listado={};
    }
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }
}