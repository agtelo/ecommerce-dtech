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
    guardar: function (req, res) {
        res.send("HOLA");
        
    },

    editar: function(req, res) {
        return res.render('products/editar', { title: "Panel", css: "crud" });
    },
    borrar: function(req, res) {
        return res.render('products/borrar', { title: "Panel", css: "crud" });
    },




}


module.exports = productController;