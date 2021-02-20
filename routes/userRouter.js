const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const userController = require('../controllers/userController');


router.get('/login', userController.login);

router.get('/registro', userController.registro);

router.get('/recupero-pass', userController.recuperoPass);
router.get('/admin', userController.admin);


module.exports = router;