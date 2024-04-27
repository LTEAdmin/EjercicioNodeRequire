const express = require('express'); 
const validar = require("../middleware/middleware.js"); //import validar from "../middleware/middleware.js";
//const  path = require("path");// "path";
const rutas = express.Router();



// creando ruta de tiempo para que pueda continuar la carga si esta autorizado
rutas.get("/tiempo", validar, (req, res) => {
  res.send("usuario autorizado a entrar a ruta de tiempo");
});

rutas.get("/", (req, res) => {
  res.send("Hello World!");
});

rutas.get('/paisaje', (req, res) => {
    //__dirname es una variable que nos da el directorio actual y asigna el nombre del archivo y entrega una pagina web
    res.sendFile(__dirname + "/paisaje.html");
});

rutas.get("*", (req, res) => {
  res.send("Pagina no encontrada, revise el url");
});

module.exports = rutas