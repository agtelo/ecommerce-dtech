const path = require("path");
const { body } = require("express-validator");

const validateProduct = [

    body("name")
    .notEmpty().withMessage("Debes ingresar un titulo")
    .isLength({ min: 5 }).withMessage("El nombre de productos debe tener mas de 5 caracteres"),
    body("description").isLength({ min: 20 }).withMessage("La descripción debe tener un mínimo de 20 caracteres"),
    body("image")
    .custom((value, { req }) => {
        let file = req.file;
        let extensionValida = [".jpg", ".png", ".svg", "gif", "jpeg"];

        if (!file) {
            throw new Error("Tienes que subir una imagen");


        } else {
            let fileExtension = path.extname(file.originalname);
            if (!extensionValida.includes(fileExtension)) {
                throw new Error("Las extensiones validas son .JPG , .PNG , .SVG", "GIF", "JPEG")
            }
        }
        return true;
    })
];

module.exports = validateProduct;