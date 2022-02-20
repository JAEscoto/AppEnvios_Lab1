const { request, response } = require("express");
const { ListadoEnvios } = require('../models/envios');
const {guardarDB, leerDB} = require ('../helpers/gestorDB')

const GetEnvios = (req = request, res = response) =>{
    //res.send('GET Endpoint para Envios')
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostEnvios = (req = request, res = response) =>{
    //res.send('POST Endpoint para Envios')
    let lista = new ListadoEnvios();
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr, 'envios')
    res.send('Regitro Creado')
}

const PutEnvios = (req = request, res = response) =>{
    //res.send('PUT Endpoint para Envios')
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion de actualizacion
    const datos = lista.listadoArr.map(item =>
        item.id == req.params.id ? {"id":item.id, ...req.body}: item);
    guardarDB(datos, 'envios')
    res.send('Registro Actualizado')
}
const DeleteEnvios = (req = request, res = response) =>{
    //res.send('DELETE Endpoint para Envios')
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item => item.id !== req.params.id)
    guardarDB(data, 'envios')
    res.send('Registro Eliminado')
    
}
module.exports ={
    GetEnvios,
    PostEnvios,
    PutEnvios,
    DeleteEnvios
}