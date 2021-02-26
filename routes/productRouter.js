const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const productController = require('../controllers/productController');

// Instalamos el modulo multer para crear la unidad de almacenamiento de subida de archivos desde formularios
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/images/products");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))}
});
const uploadFIle = multer({ storage: storage});

// Routes
router.get('/productos', productController.producto);
router.get('/carrito', productController.carrito);
router.get('/product-panel', productController.panel);

router.get('/product-panel/crear',  productController.crear);
router.post('/product-panel/crear', uploadFIle.any(), productController.guardar);

router.get('/product-panel/editar', productController.editar);
router.patch('/product-panel/editar', productController.actualizar);

router.get('/product-panel/borrar', productController.borrar);
router.delete('/product-panel/borrar', productController.borrar);


module.exports = router;