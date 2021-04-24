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
                return res.render('products/product-panel', { title: "Panel", css: "product-panel", "products" : products });
            })
        
    },

    crear(req, res) {
        db.Category.findAll()
        .then(categories => {
            res.render('products/crear', { title: "Articulo", css: "product-panel", categories })
        })
        

    },

    guardado: function(req, res) {
        const { name, description , item1, item2, item3, item4, item5, item6, item7, item8, categoryId ,price} = req.body
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
            categoryId: Number(categoryId),
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
            item1: req.body.item1,
            item2: req.body.item2,
            item3: req.body.item3,
            item4: req.body.item4,
            item5: req.body.item5,
            item6: req.body.item6,
            item7: req.body.item7,
            item8: req.body.item8,
            categoryId: req.body.category,
            price: req.body.price,

            image: req.file.filename
        });
        res.redirect('./crear');
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
                    return res.render("products/editar", {  categories , product })
                }
})



},
    actualizar: function(req, res) {
        const { name, description , item1, item2, item3, item4, item5, item6, item7, item8, categoryId ,price} = req.body
        const { filename } = req.file
        
        db.Product.update({
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
            categoryId: Number(categoryId),
            price,
            image: filename
        }, {
            where : {
                id : req.params.id
            }
        });
        return res.redirect("../products/editar" + req.params.id)
                    
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