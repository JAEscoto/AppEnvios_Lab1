const { request, response } = require("express");

const GetEnvios = (req = request, res = response) =>
    res.send('GET Endpoint para Envios')

const PostEnvios = (req = request, res = response) =>
    res.send('POST Endpoint para Envios')

const PutEnvios = (req = request, res = response) =>
    res.send('PUT Endpoint para Envios')

const DeleteEnvios = (req = request, res = response) =>
    res.send('DELETE Endpoint para Envios')

module.exports ={
    GetEnvios,
    PostEnvios,
    PutEnvios,
    DeleteEnvios
}