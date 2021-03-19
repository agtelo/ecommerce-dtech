const express = require('express');
// la constante router instanciará el Router de express
const router = express.Router();
// la constante mainController requerirá el controlador
const userController = require('../controllers/userController');

const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./public/images/users");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))}
});
const uploadFIle = multer({ storage: storage});


router.get('/login', userController.login);

router.get('/registro', userController.registro);
router.post('/registro',uploadFIle.single("imagen"), userController.crearUsuario);

router.get('/usuario', userController.show);

router.get('/recupero-pass', userController.recuperoPass);
router.get('/recupero-validacion', userController.recuperoValidacion);

router.get('/admin', userController.admin);




module.exports = router;