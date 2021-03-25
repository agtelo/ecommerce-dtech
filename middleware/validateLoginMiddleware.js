const {body} = require("express-validator");

let validateLogin = [
    body("email")
    .notEmpty().withMessage("Debes ingresar tu correo electronico").bail()
    .isEmail().withMessage("Debes ingresar un correo electronico valido").bail(),
    body("password")
    .notEmpty().withMessage("Debes ingresar tu contraseña").bail()
    
];

module.exports = validateLogin;