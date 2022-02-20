const { request, response } = require("express");
const { ListadoSeguimientos } = require('../models/seguimientos');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const GetSeguimiento = (req = request, res = response) =>{
    // res.send('GET Endpoint para Seguimiento')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostSeguimiento = (req = request, res = response) =>{
    // res.send('POST Endpoint para Seguimiento')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimiento(req.body)
    guardarDB(lista.listadoArr,'seguimientos')
    res.send('Registro Creado')
}

const PutSeguimiento = (req = reques, res = response) =>{
    // res.send('PUT Endpoint para Seguimiento')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'seguimientos')
    res.send('Registro Actualizado')
}

const DeleteSeguimiento = (req = reques, res = response) =>{
    // res.send('Delete Endpoint para Seguimiento')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'seguimientos')
    res.send('Registro Eliminado')   
}
module.exports ={
    GetSeguimiento,
    PostSeguimiento,
    PutSeguimiento,
    DeleteSeguimiento
}