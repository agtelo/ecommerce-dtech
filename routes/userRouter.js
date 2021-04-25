const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const userController = require('../controllers/userController');
// se requieren middlewares para aplicar por ruta
const uploadFile = require('../middleware/multerUserMiddleware');
const validateLogin = require('../middleware/validateLoginMiddleware')
const validateRegistro = require('../middleware/validateRegistroMiddleware')
const guestMiddleware = require("../middleware/guestMiddleware")
const authMiddleware = require("../middleware/authMiddleware")


router.get('/login', guestMiddleware, userController.login);
router.post('/login', validateLogin, userController.ingresoUsuario);

router.get('/registro', guestMiddleware, userController.registro);
router.post('/registro', uploadFile.single("imagen"), validateRegistro, userController.crearUsuario);

router.get('/bienvenida', userController.bienvenida);
router.get('/perfil', authMiddleware, userController.perfil);

router.get('/editar-perfil', userController.editarPerfil);
router.put('/editar-perfil/:id', uploadFile.single("image"), userController.actualizarPerfil);


router.get('/recupero-pass', userController.recuperoPass);
router.get('/recupero-validacion', userController.recuperoValidacion);

router.get('/admin', userController.admin);

router.get('/logout', userController.logout);

router.get('/userlist', userController.show);

router.delete('/userdelete/:id', userController.delete);

router.get('/useredit/:id', userController.editUser);
router.put('/useredit/:id',uploadFile.single("image"), userController.updateUser);

module.exports = router;