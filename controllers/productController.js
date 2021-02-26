const fs = require("fs");

const productController = {

    producto: function(req, res) {
        return res.render('products/productos', { title: "Producto", css: "producto" });
    },
    carrito: function(req, res) {
        return res.render('products/carrito', { title: "Carrito", css: "carrito" });
    },
    panel: function(req, res) {
        return res.render('products/product-panel', { title: "Panel", css: "product-panel" });
    },
    crear: function(req, res) {
        return res.render('products/crear', { title: "Panel", css: "crud" });
    },
    guardar: function(req, res) {
        let producto = {
            id: req.body.id,
            name: req.body.nombre,
            description: req.body.descripcion,
            item: req.body.item,
            category: req.body.categoria,
            price: req.body.precio,
            image: req.body.imagen
        };
        let archivoProducto = fs.readFileSync("./data/product.json", {encoding:"utf-8"});
        let productos;
        if (archivoProducto == ""){
            productos = [];
        } else {
            productos = JSON.parse(archivoProducto);
        }
        productos.push(producto);

        productoJSON = JSON.stringify(producto,null,2);
        fs.appendFileSync( "./data/product.json", productoJSON);
        res.redirect('./crear');
    },
    editar: function(req, res) {
        return res.render('products/editar', { title: "Panel", css: "crud" });
    },
    actualizar: function(req, res) {  
    },
    borrar: function(req, res) {
        return res.render('products/borrar', { title: "Panel", css: "crud" });
    },
}

module.exports = productController;