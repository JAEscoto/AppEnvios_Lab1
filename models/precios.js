const {v4: uuidv4} = require('uuid')

class Precios {
    constructor(id, cantidad, valor, estado){
        this.id = uuidv4()
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

    cargarTareasFromArray(datos = []) {
        datos.forEach(precio => {
            this._listado[precio.id] = envio;
        });
    }

    crearPrecio(datos) {
        const precio = new Precios(
            datos.id,
            datos.cantidad,
            datos.valor,
            datos.estado
            );
        this._listado[precio.id] = precio;
    }
}

module.exports = {
    ListadoPrecios
}