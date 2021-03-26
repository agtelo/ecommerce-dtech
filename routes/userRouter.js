const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const userController = require('../controllers/userController');
// se requieren middlewares para aplicar por ruta
const uploadFile = require('../middleware/multerMiddleware');
const validateLogin = require('../middleware/validateLoginMiddleware')
const validateRegistro = require('../middleware/validateRegistroMiddleware')
const guestMiddleware = require("../middleware/guestMiddleware")
const authMiddleware = require("../middleware/authMiddleware")

router.get('/login', guestMiddleware,userController.login);
router.post('/login', validateLogin, userController.ingresoUsuario);

router.get('/registro', guestMiddleware, userController.registro);
router.post('/registro', uploadFile.single("imagen"), validateRegistro , userController.crearUsuario);

router.get('/usuario', authMiddleware,userController.show);

router.get('/recupero-pass', userController.recuperoPass);
router.get('/recupero-validacion', userController.recuperoValidacion);

router.get('/admin', userController.admin);




module.exports = router;