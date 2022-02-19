const { request, response } = require("express");

const GetPaquetes = (req = request, res = response) =>
    res.send('GET Endpoint para Paquetes')

const PostPaquetes = (req = request, res = response) =>
    res.send('Post Endpoint para Paquetes')

const PutPaquetes = (req = request, res = response) =>
    res.send('PUT Endpoint para Paquetes')

const DeletePaquetes = (req = request, res = response) =>
    res.send('DELETE Endpoint para Paquetes')

module.exports ={
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes
}