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
        let productoNuevo = {
            id: req.body.id,
            name: req.body.nombre,
            description: req.body.descripcion,
            item: req.body.item,
            category: req.body.categoria,
            price: req.body.precio,
            image: req.body.imagen
        };
        let productoJSON = JSON.stringify(productoNuevo);
        fs.writeFileSync( "./data/productoNuevo.json", productoJSON);
        res.redirect('./crear');
    },

    editar: function(req, res) {
        return res.render('products/editar', { title: "Panel", css: "crud" });
    },
    borrar: function(req, res) {
        return res.render('products/borrar', { title: "Panel", css: "crud" });
    },
}

module.exports = productController;