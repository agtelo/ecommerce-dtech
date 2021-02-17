const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const mainController = require('../controllers/mainController');

// Al hacer una petición get a la ruta base,
// se enviarán los datos (req y res) al método index del controller
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/registro', mainController.registro);
router.get('/recupero-pass', mainController.recuperoPass);
router.get('/contacto', mainController.contacto);
router.get('/productos', mainController.producto);
router.get('/carrito', mainController.carrito);
router.get('/desarrollos', mainController.desarrollo);
router.get('/admin', mainController.admin);
router.get('/product-panel', mainController.panel);




module.exports = router;


