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
app.get("/contacto.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/contacto.html"))

});

app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))

});

app.get("/carrito.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/carrito.html"))

});

app.get("/registro.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/registro.html"))

});

app.get("/producto.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/producto.html"))

});
app.get("/recupero-pass.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/recupero-pass.html"))

});
app.get("/desarrollo.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/desarrollo.html"))

});