const productController = {

    producto: function(req,res){
        return res.render ('products/productos' , {title: "Producto", css: "producto"});
    },

    carrito: function(req,res){
        return res.render ('products/carrito', {title: "Carrito", css: "carrito"});
    },

    panel: function(req,res) {
        return res.render ('products/product-panel', {title: "Panel", css: "product-panel"});
    }
    

}


module.exports = productController;