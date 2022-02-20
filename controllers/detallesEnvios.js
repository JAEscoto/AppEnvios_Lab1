const { request, response } = require("express")
const { ListadoDetalleEnvios } = require('../models/detallesEnvios');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const GetDetallesEnvios = (req = request , res = response) =>{
    //res.send('GET Endpoint para Detalle de Envios')
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}
const PostDetallesEnvios = (req = request , res = response) =>{
   // res.send('POST Endpoint para Detalle de Envios')
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearDetalleEnvio(req.body)
    guardarDB(lista.listadoArr,'detallesEnvios')
    res.send('Registro Creado')
}
const PutDetallesEnvios = (req = request , res = response) =>{ 
    //res.send('PUT Endpoint para Detalle de Envios')
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'detallesEnvios')
    res.send('Registro Actualizado')
}
const DeleteDetallesEnvios = (req = request , res = response) =>{
    //res.send('DELETE Endpoint para Detalle de Envios')
    let lista = new ListadoDetalleEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'detallesEnvios')
    res.send('Registro Eliminado')
}
module.exports ={
    GetDetallesEnvios,
    PostDetallesEnvios,
    PutDetallesEnvios,
    DeleteDetallesEnvios
}