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
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/contacto.html"))

});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))

});

app.get("/carrito", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/carrito.html"))

});

app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/registro.html"))

});

app.get("/producto.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/producto.html"))

});