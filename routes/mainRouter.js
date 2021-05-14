const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const mainController = require('../controllers/mainController');


// Al hacer una petición get a la ruta base,
// se enviarán los datos (req y res) al método index del controller
router.get('/', mainController.index);
router.get('/contacto', mainController.contacto);
router.post('/contacto', mainController.submit);
router.get('/about', mainController.nosotros);
router.get('/terminos-condiciones', mainController.condiciones);
router.get('/politica-cookies', mainController.cookies);
router.get('/politica-privacidad', mainController.privacidad);








module.exports = router;


