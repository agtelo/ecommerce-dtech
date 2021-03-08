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
router.get('/articulo', productController.show);

router.get('/crear',  productController.crear);
router.post('/crear', uploadFIle.single("imagen"), productController.guardar);


router.get('/editar/:id', productController.editar);
router.put('/editar/:id', productController.actualizar);

router.get('/borrar/:id', productController.borrar);
router.delete('/borrar/:id', productController.destruir);


module.exports = router;