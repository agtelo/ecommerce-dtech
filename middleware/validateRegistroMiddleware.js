const path = require("path");

const {body} = require("express-validator");

let validateRegistro = [
    body("nombre").notEmpty().withMessage("Debes ingresar tu nombre"),
    body("apellido").notEmpty().withMessage("Debes ingresar tu apellido"),
    body("telefono").notEmpty().withMessage("Debes ingresar tu telefono"),
    body("email")
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes ingresar un email valido"),
    body("password").notEmpty().withMessage("Debes ingresar una contraseña"),
    body("imagen").custom((value, {req}) =>{
        let file = req.file;
        let extensionValida = [ ".jpg", ".png" , ".svg"];

        if (!file) {
            throw new Error ("Tienes que subir una imagen");

        }else {
            let fileExtension = path.extname(file.originalname);
            if (!extensionValida.includes(fileExtension)) {
                throw new Error("Las extensiones validas son .JPG , .PNG , .SVG")
            }
        }
    }) 
];

module.exports = validateRegistro;