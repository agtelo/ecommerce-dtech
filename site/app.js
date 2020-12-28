const express = require("express");
const app = express();
const path = require('path');

const publicFolderPath = path.resolve(__dirname, "./public");
app.use(express.static(publicFolderPath));

app.listen(3030, () => {
    console.log("servidor dtech funcionando ok")
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))

});

app.get("login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))

});

app.get("contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/contacto.html"))

});

app.get("producto", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/producto.html"))

});

app.get("registro", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/registro.html"))

});

app.get("carrito", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/carrito.html"))

});

