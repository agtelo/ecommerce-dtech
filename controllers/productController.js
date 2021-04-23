const db = require("../database/models");

const productController = {

    producto: function(req, res) {
        db.Product.findAll()
            .then(function(products) {
<<<<<<< HEAD
                return res.render('products/productos', { title: "Articulo", css: "product-panel", "products" : products})
            }
                
            )
        
    },
    carrito: function(req, res) {
        return res.render('products/carrito', { title: "Carrito", css: "carrito" });
    },
    show: function (req, res) {
        return res.render('products/articulo', { title: "Articulo", css: "product-panel", "products" : products});
    },
    
=======
                return res.render('products/productos', { title: "Articulo", css: "product-panel", "products": products })
            })
    },

    carrito: function(req, res) {
        return res.render('products/carrito', { title: "Carrito", css: "carrito" });
    },

    show: function(req, res) {
        return res.render('products/articulo', { title: "Articulo", css: "product-panel", "products": products });
    },

>>>>>>> af91d237ad705014c154eafd15bdd8ab2c560d88
    panel: function(req, res) {
        return res.render('products/product-panel', { title: "Panel", css: "product-panel", "products" : products });
    },
<<<<<<< HEAD
    crear: function(req, res) {
        return res.render('products/crear', { title: "Panel", css: "crud"});
    },
    guardar: function(req, res) {
        db.Product.create ({
            name: req.body.nombre,
            description: req.body.descripcion,
=======

    crear(req, res) {
        db.Category.findAll()
        .then(categories => {
            res.render('products/crear', { title: "Articulo", css: "product-panel", categories })
        })
        

    },

    guardado: function(req, res) {
        const { name, description , item1, item2, item3, item4, item5, item6, item7, item8, category_id ,price} = req.body
        const { filename } = req.file
        
        db.Product.create({
            id:"",
            name, 
            description, 
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
            item8, 
            category_id: Number(category_id),
            price,
            image: filename
        })
        .then()
            res.redirect('./crear');  
                        
                    
                    
        
            },

    /*guardado: function(req, res) {
        
        
        db.Product.create({
            id: "",
            name: req.body.name,
            description: req.body.description,
>>>>>>> af91d237ad705014c154eafd15bdd8ab2c560d88
            item1: req.body.item1,
            item2: req.body.item2,
            item3: req.body.item3,
            item4: req.body.item4,
            item5: req.body.item5,
            item6: req.body.item6,
            item7: req.body.item7,
            item8: req.body.item8,
<<<<<<< HEAD
            category_id: req.body.categoria,
            price: req.body.precio,
=======
            category_id: req.body.category,
            price: req.body.price,

>>>>>>> af91d237ad705014c154eafd15bdd8ab2c560d88
            image: req.file.filename
        });
        res.redirect('./crear');
<<<<<<< HEAD
    },
    editar: function(req, res) {
        let productoAEditar = products.find( producto => producto.id == req.params.id);
        return res.render("products/editar", {"productoAEditar" : productoAEditar});        
    },
    actualizar: function(req, res) {
        const productoAEditar = products.find( producto => producto.id == req.params.id);
=======
    },*/

    editar: function(req, res) {
        const {id} = req.params;

        Promise.all([
            db.Product.findByPk(id),
            db.Category.findAll()
        ])
            .then(promiseRes => {
                const product = promiseRes[0]
                const categories = promiseRes[1]

                if(product){
                    return res.render("products/editar", { "categoriaAEditar": categories , "productoAEditar" :product })
                }
})



    },
    actualizar: function(req, res) {
        /*const productoAEditar = products.find(producto => producto.id == req.params.id);
>>>>>>> af91d237ad705014c154eafd15bdd8ab2c560d88

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
		});

		let productoSubir = JSON.stringify(productoEditado, null , 2);
		fs.writeFileSync(productsFilePath,productoSubir);

<<<<<<< HEAD
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
=======
        res.redirect("/")*/
    },
    destruir: function(req, res) {
        const { id } = req.params
        db.Product.destroy({
                where: {
                    id
                }
            })
            .then(() => {
                res.redirect('/products/product-panel')
            })
>>>>>>> af91d237ad705014c154eafd15bdd8ab2c560d88
    }
}

module.exports = productController;