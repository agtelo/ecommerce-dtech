const fs = require("fs");
const path = require('path');
let productsFilePath = path.resolve(__dirname, '../data/product.json');
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
        return res.render('products/product-panel', { title: "Panel", css: "product-panel", "products" : products });
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
        const productoAEditar = products.find( producto => producto.id == req.params.id);

		const productoEditado = products.map( producto => {
			if(producto.id == productoAEditar.id ){
                producto.name = req.body.name;
                producto.description = req.body.description;
                producto.item1 = req.body.item1;
                producto.item2 = req.body.item2;
                producto.item3 = req.body.item3;
                producto.item4 = req.body.item4;
                producto.item5 = req.body.item5;
                producto.item6 = req.body.item6;
                producto.item7 = req.body.item7;
                producto.item8 = req.body.item8;
                producto.category = req.body.category;
                producto.price = req.body.price;
                producto.image = req.body.image;

            }
			return producto;
		})

		let productoSubir = JSON.stringify(productoEditado, null , 2);
		fs.writeFileSync(productsFilePath,productoSubir);

		res.redirect("/")


    },
    borrar: function(req, res) {
        res.render()

    },

    destruir: function(req, res) {

        let productoAEliminar = products.filter(producto => producto.id != req.params.id);
            
            /*let imagenABorrar = products.find( producto => producto.id == req.params.id);
            let filePath = path.resolve(__dirname,'../public/img/products/' + imagenABorrar.image);
            console.log(imagenABorrar);
            console.log(filePath);
            fs.unlinkSync(filePath);*/

            let productoASubirJSON = JSON.stringify(productoAEliminar, null , 2);
            fs.writeFileSync(productsFilePath,productoASubirJSON);
            res.redirect("/")
    }

}

module.exports = productController;