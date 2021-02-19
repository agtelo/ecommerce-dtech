const express = require("express");
const app = express();
const path = require('path');
const methodOverride = require("method-override");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor esta corriendo en puerto 3000 ")
})

const mainRouter = require('./routes/mainRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
    res.status(404).render("404-page");
    next();
});



