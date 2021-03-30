const fs = require("fs");
const path = require('path');
let usuariosFilePath = path.resolve(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    
    let userFromCookie = usuarios.find( usuario => usuario.email == emailInCookie);
    
    if(userFromCookie) {
        req.session.userLogged = userFromCookie;

    }



    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged; 
    
    }


    next();
}
module.exports = userLoggedMiddleware;