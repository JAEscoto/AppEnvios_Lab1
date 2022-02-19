const { request, response } = require("express")

const GetDetallesEnvios = (req = request , res = response) =>
    res.send('GET Endpoint para Detalle de Envios')

const PostDetallesEnvios = (req = request , res = response) =>
    res.send('POST Endpoint para Detalle de Envios')

const PutDetallesEnvios = (req = request , res = response) => 
    res.send('PUT Endpoint para Detalle de Envios')

const DeleteDetallesEnvios = (req = request , res = response) =>
    res.send('DELETE Endpoint para Detalle de Envios')

module.exports ={
    GetDetallesEnvios,
    PostDetallesEnvios,
    PutDetallesEnvios,
    DeleteDetallesEnvios
}