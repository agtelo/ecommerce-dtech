const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const productController = require('../controllers/productController');

// Instalamos el modulo multer para crear la unidad de almacenamiento de subida de archivos desde formularios
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req , file , cb) {
        cb(null, "./public/images/avatars");
    },
    filename: function (req, file, cb) {
        cb(null,"${Date.now()}_img_${path.extname(filename.originalname)}")
        
    }
});
const uploadFIle = multer ({ storage});

router.get('/productos', productController.producto);
router.get('/carrito', productController.carrito);
router.get('/product-panel', productController.panel);


module.exports = router;