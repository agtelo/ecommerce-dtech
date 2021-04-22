const db = require("../database/models");

const productController = {

    producto: function(req, res) {
        db.Product.findAll()
            .then(function(products) {
                return res.render('products/productos', { title: "Articulo", css: "product-panel", "products": products })
            })
    },

    carrito: function(req, res) {
        return res.render('products/carrito', { title: "Carrito", css: "carrito" });
    },

    show: function(req, res) {
        return res.render('products/articulo', { title: "Articulo", css: "product-panel", "products": products });
    },

    panel: function(req, res) {
        db.Product.findAll()
            .then(function(products) {
                    return res.render('products/product-panel', { title: "Articulo", css: "product-panel", "products": products })
                }

            )
    },

    crear(req, res) {
        db.Category.findAll()
        .then(categories => {
            res.render('products/crear', { title: "Articulo", css: "product-panel", categories })
        })
        

    },
        /*db.Category.findAll()
            .then(function(categories) {
                return res.render('products/crear', { title: "Articulo", css: "product-panel", categories })
            })*/

    

    guardado: function(req, res) {
        
        
        db.Product.create({
            id: "",
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
            category_id: req.body.categoria,
            price: req.body.precio,

            image: req.file.filename
        });
        res.redirect('./crear');
    },

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
                    return res.render("products/editar", { categories , product })
                 }
             
             })

        /*db.Product.findByPk(req.params.id)
            .then(function(product) {
                return res.render("products/editar", { "productoAEditar": product });
            });*/
        /*db.Category.findAll()
            .then(function(category){
                console.log(category)
            })*/

    },
    actualizar: function(req, res) {
        /*const productoAEditar = products.find(producto => producto.id == req.params.id);

        const productoEditado = products.map(producto => {
            if (producto.id == productoAEditar.id) {
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

        let productoSubir = JSON.stringify(productoEditado, null, 2);
        fs.writeFileSync(productsFilePath, productoSubir);

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
    }
}

module.exports = productController;