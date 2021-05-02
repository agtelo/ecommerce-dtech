const path = require("path");

const {body} = require("express-validator");

let validateRegistroMiddleware = [
    body("firstName")
    .notEmpty().withMessage("Debes ingresar tu nombre")
    .isLength({ min: 2 }).withMessage("Debes ingresar al menos 2 caracteres"),
    body("lastName")
    .notEmpty().withMessage("Debes ingresar tu apellido")
    .isLength({ min: 2 }).withMessage("Debes ingresar al menos 2 caracteres"),
    body("phone")
    .notEmpty().withMessage("Debes ingresar tu telefono"),
    body("email")
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes ingresar un email valido"),
    body("password")
    .notEmpty().withMessage("Debes ingresar una contraseña")
    .isStrongPassword({ minLength: 8, minLowercase: 5, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage("La debe tener minimo 8 caracteres 1 mayuscula 1 numero y 1 simbolo"),
    body("image").custom((value, {req}) =>{
        let file = req.file;
        let extensionValida = [ ".jpg", ".png" , ".svg" , ".jpeg" , ".gif"];

        if (!file) {
            throw new Error ("Tienes que subir una imagen");

        }else {
            let fileExtension = path.extname(file.originalname);
            if (!extensionValida.includes(fileExtension)) {
                throw new Error("Las extensiones validas son .JPG , .PNG , .SVG , . JPEG , .GIF" )
            }
        }
        return true;
    }) 
];

module.exports = validateRegistroMiddleware;