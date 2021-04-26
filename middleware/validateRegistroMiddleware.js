const path = require("path");

const {body} = require("express-validator");

let validateRegistroMiddleware = [
    body("firstName").notEmpty().withMessage("Debes ingresar tu nombre"),
    body("lastName").notEmpty().withMessage("Debes ingresar tu apellido"),
    body("phone").notEmpty().withMessage("Debes ingresar tu telefono"),
    body("email")
    .notEmpty().withMessage("Debes ingresar un email").bail()
    .isEmail().withMessage("Debes ingresar un email valido"),
    body("password").notEmpty().withMessage("Debes ingresar una contraseña"),
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