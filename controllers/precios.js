const { response, request } = require("express");

const GetPrecios = (req = request, res = response) =>
    res.send('GETEndpoint para Precios')

const PostPrecios = (req = request, res = response) =>
    res.send('POST Endpoint para Precios')

const PutPrecios = (req = request, res = response) =>
    res.send('PUT Endpoint para Precios')

const DeletePrecios = (req = request, res = response) =>
    res.send('DELETE Endpoint para Precios')

module.exports ={
    GetPrecios,
    PostPrecios,
    PutPrecios,
    DeletePrecios
}