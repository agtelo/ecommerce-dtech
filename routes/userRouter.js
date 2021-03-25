const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const userController = require('../controllers/userController');
const uploadFile = require('../middleware/multerMiddleware');
const validateLogin = require('../middleware/validateLoginMiddleware')
const validateRegistro = require('../middleware/validateRegistroMiddleware')

router.get('/login', userController.login);
router.post('/login', validateLogin, userController.ingresoUsuario);

router.get('/registro', userController.registro);
router.post('/registro',validateRegistro , uploadFile.single("imagen"), userController.crearUsuario);

router.get('/usuario', userController.show);

router.get('/recupero-pass', userController.recuperoPass);
router.get('/recupero-validacion', userController.recuperoValidacion);

router.get('/admin', userController.admin);




module.exports = router;