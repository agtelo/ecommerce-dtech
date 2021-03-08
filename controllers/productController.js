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
        let productAEditar=products.find(product=>(product.id==req.params.id));

		let productoEditado = [];

        products.map((product) => {
            if(product.id==productAEditar.id){
                product.name = req.body.name;
                product.description = req.body.description;
                product.item1 = req.body.item1;
                product.item2 = req.body.item2;
                product.item3 = req.body.item3;
                product.item3 = req.body.item;
                product.item5 = req.body.item5;
                product.item6 = req.body.item6;
                product.item7 = req.body.item7;
                product.item8 = req.body.item8;
                product.category = req.body.category;                
                product.price = req.body.price;
                product.image =req.body.image;
            };
            productoEditado.push(product)
        });   
                console.log(productoEditado);        
        
		let productJsonEditado = JSON.stringify(productoEditado, null, 2);
		fs.writeFileSync('./data/product.json', productJsonEditado);
		res.redirect("/");


    },
    borrar: function(req, res) {
        res.render()

    },

    destruir: function(req, res) {

        let productoEliminado = products.filter(producto => producto.id != req.params.id);
            
            /*let imagenABorrar = products.find( producto => producto.id == req.params.id);
            let filePath = path.resolve(__dirname,'../public/img/products/' + imagenABorrar.image);
            console.log(imagenABorrar);
            console.log(filePath);
            fs.unlinkSync(filePath);*/

            let productoSubir = JSON.stringify(productoEliminado, null , 2);
            fs.writeFileSync(productsFilePath,productoSubir);
            res.redirect("/")
    }

}

module.exports = productController;