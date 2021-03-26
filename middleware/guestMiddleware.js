function authMiddleware(req, res , next) {
    if (req.session.userLogged) {
        return res.redirect("../users/usuario");
    }
    next();
}

module.exports = authMiddleware