const { request, response } = require("express");
const { ListadoPaquetes } = require('../models/paquetes');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const GetPaquetes = (req = request, res = response) =>{
    //res.send('GET Endpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostPaquetes = (req = request, res = response) =>{
    //res.send('Post Endpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPaquetes(req.body)
    guardarDB(lista.listadoArr,'paquetes')
    res.send('Registro Creado')
}

const PutPaquetes = (req = request, res = response) =>{
    //res.send('PUT Endpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id ? {"id":item.id, ...req.body}: item);
    guardarDB(datos,'paquetes')
    res.send('Registro Actualizado')
}

const DeletePaquetes = (req = request, res = response) =>{
    //res.send('DELETE Endpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'paquetes')
    res.send('Registro Eliminado')
}

module.exports ={
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes
}