const fs = require("fs");
const path = require('path');
const productsFilePath = path.resolve(__dirname, '../data/product.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
            image: req.file.filename
        };
        products.push(productoNuevo);
        let productoSubir = JSON.stringify(products, null , 2);
		fs.writeFileSync(productsFilePath ,productoSubir)
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