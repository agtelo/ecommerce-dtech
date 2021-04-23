const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const productController = require('../controllers/productController');

// Instalamos el modulo multer para crear la unidad de almacenamiento de subida de archivos desde formularios
const uploadFile = require("../middleware/multerProductMiddleware")

// Routes
router.get('/productos', productController.producto);
router.get('/carrito', productController.carrito);
router.get('/product-panel', productController.panel);
router.get('/articulo', productController.show);

<<<<<<< HEAD
router.get('/crear',  productController.crear);
router.post('/crear', uploadFile.single("imagen"), productController.guardar);
=======
router.get('/crear', productController.crear);
router.post('/crear', uploadFile.single("image"), productController.guardado);
>>>>>>> af91d237ad705014c154eafd15bdd8ab2c560d88


router.get('/editar/:id', productController.editar);
router.put('/editar/:id', productController.actualizar);


router.delete('/borrar/:id', productController.destruir);


module.exports = router;