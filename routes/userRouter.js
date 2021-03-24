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

const {body} = require("express-validator");
let validateLogin = [
    body("email")
    .notEmpty().withMessage("Debes ingresar tu correo electronico").bail()
    .isEmail().withMessage("Debes ingresar un correo electronico valido").bail(),
    body("password")
    .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
    .isLength({min:5 , max:10}).withMessage("")
];


router.get('/login', userController.login);
router.post('/login', validateLogin, userController.ingresar);

router.get('/registro', userController.registro);
router.post('/registro',uploadFIle.single("imagen"), userController.crearUsuario);

router.get('/usuario', userController.show);

router.get('/recupero-pass', userController.recuperoPass);
router.get('/recupero-validacion', userController.recuperoValidacion);

router.get('/admin', userController.admin);




module.exports = router;