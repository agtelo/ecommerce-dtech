// Requerimos Express para montar servidor propio en nuestro proyecto
const express = require("express");
const app = express();

// Requerimos Path para poder gestionar las carpetas dentro de nuestro servidor
const path = require('path');

// Requerimos Method-Override para sobreescribier los metodos de los formularios 
const methodOverride = require("method-override");

// Configuramos el "template-engine" para hacer dinamicas nuestras vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Seteo la ubicación de los archivos que usaremos en la aplicación - Dir: Public 
app.use(express.static(path.join(__dirname, 'public')));

// Se indica que cuando recibamos un objeto por POST se podran acceder a los datos en pos.body como parametros del tipo String 
app.use(express.urlencoded({ extended: false }));

// convierte los objetos del tipo Json a array de String
app.use(express.json());

// La linea siguiente nos permite agregar otros metodos diferentes de GET y POST en los formularios
app.use(methodOverride("_method"));

// Apertura de PORT 
app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor esta corriendo en puerto 3000 ")
}) 

// Routers 
const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

// catch 404 and forward to error handle
app.use((req, res, next) => {
    res.status(404).render("404-page");
    next();
});



