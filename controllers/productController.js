const { validationResult } = require("express-validator");
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
                return res.render('products/product-panel', { title: "Panel", css: "product-panel", "products": products });
            })

    },

    crear(req, res) {
        db.Category.findAll()
            .then(categories => {
                res.render('products/crear', { title: "Articulo", css: "product-panel", categories })
            })


    },

    guardado: function(req, res) {
        let problemas = validationResult(req);
        if (problemas.isEmpty()) {
            const { name, description, item1, item2, item3, item4, item5, item6, item7, item8, categoryId, price } = req.body
            const { filename } = req.file

            db.Product.create({
                    id: "",
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
            res.redirect('./product-panel');
        } else {
            db.Category.findAll()
                .then(categories => {
                    res.render('products/crear', {
                        title: "Articulo",
                        css: "product-panel",
                        categories,
                        errors: problemas.mapped(),
                        oldData: req.body,
                    })
                })



        }

    },

    editar: function(req, res) {
        const { id } = req.params;

        Promise.all([
                db.Product.findByPk(id),
                db.Category.findAll()
            ])
            .then(promiseRes => {
                const product = promiseRes[0]
                const categories = promiseRes[1]

                if (product) {
                    return res.render("products/editar", { categories, product })
                }
            })



    },
    actualizar: function(req, res) {
        const { name, description, item1, item2, item3, item4, item5, item6, item7, item8, categoryId, price } = req.body
        const { filename } = req.file

        db.Product.update({
            id: "",
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
            where: {
                id: req.params.id
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