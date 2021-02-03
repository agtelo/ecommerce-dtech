const express = require("express");
const app = express();
const path = require('path');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));




app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor esta corriendo ")
})

const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

//app.get("/", (req, res) => {
////    res.sendFile(path.join(__dirname, "./views/home.html"))

//});
//app.get("/contacto.html", (req, res) => {
//    res.sendFile(path.join(__dirname, "./views/contacto.html"))

//});

//app.get("/login.html", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/login.html"))

//});

//app.get("/carrito.html", (req, res) => {
//    res.sendFile(path.join(__dirname, "./views/carrito.html"))

//});

//app.get("/registro.html", (req, res) => {
//    res.sendFile(path.join(__dirname, "./views/registro.html"))

//});

//app.get("/producto.html", (req, res) => {
//    res.sendFile(path.join(__dirname, "./views/producto.html"))

//});
//app.get("/recupero-pass.html", (req, res) => {
//   res.sendFile(path.join(__dirname, "./views/recupero-pass.html"))

//});
//app.get("/desarrollo.html", (req, res) => {
//    res.sendFile(path.join(__dirname, "./views/desarrollo.html"))

//});