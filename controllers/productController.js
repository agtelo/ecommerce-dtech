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
    show: function (req, res) {
        return res.render('products/articulo', { title: "Articulo", css: "product-panel", "products" : products});
    },
    
    panel: function(req, res) {
        return res.render('products/product-panel', { title: "Panel", css: "product-panel", "products" : products});
    },
    crear: function(req, res) {
        return res.render('products/crear', { title: "Panel", css: "crud"});
    },
    guardar: function(req, res) {
        let productoNuevo = {
            id: req.body.id,
            name: req.body.nombre,
            description: req.body.descripcion,
            item1: req.body.item1,
            item2: req.body.item2,
            item3: req.body.item3,
            item4: req.body.item4,
            item5: req.body.item5,
            item6: req.body.item6,
            item7: req.body.item7,
            item8: req.body.item8,
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
        let productoAEditar = products.find( producto => producto.id == req.params.id);
        return res.render("products/editar", {"productoAEditar" : productoAEditar});        
    },
    actualizar: function(req, res) {
        let productoAEditar = products.find( producto => producto.id == req.params.id);
        console.log(productoAEditar);

        



    },
    borrar: function(req, res) {
        return res.render('products/borrar', { title: "Panel", css: "crud" });
    },
}

module.exports = productController;