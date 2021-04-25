const db = require("../database/models");
const Users = db.User

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;

    Users.findAll()
        
        .then(function (users) {
            let userFromCookie = users.find( oneUser => oneUser.email == emailInCookie);
            if(userFromCookie) {
                req.session.userLogged = userFromCookie;
        
            } 

        })

        if (req.session && req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged; 
        
        }

    next();
}
module.exports = userLoggedMiddleware;

