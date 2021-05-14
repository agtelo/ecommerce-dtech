
const bcryptjs = require('bcryptjs');
const { validationResult, body } = require("express-validator");
const db = require("../database/models");
const emailer = require("../database/config/emailer")

const userController = {

    login: function(req, res) {
        return res.render('users/login');
    },

    ingresoUsuario: function(req, res) {
        let errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.render('users/login', { 
                old: req.body, 
                errors: errors.mapped() 
            });
        }

        db.User.findOne({
            where: { email: req.body.email}
        })            
        .then(userToLogin => {
                
            if (userToLogin) {
                let validatePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                
                if (validatePassword) {
                    
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    if (req.body.remember_user) {
                        res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 1000 })
                    }
                    if(userToLogin.rolId == 1){
                        return res.redirect("../products/product-panel")
                    }
                    return res.redirect("../users/perfil");
                
                
                };
                
                return res.render("users/login", {
                    errors: {
                        password: {
                            msg: "Las credenciales son inválidas"
                        }
                    }
                });
            };
            return res.render("users/login", {
                errors: {
                    email: {
                        msg: "No se encuentra este email en nuestra base de datos"
                    }
    
                },
                oldData: req.body
            });        
    })
    },
    
    registro: function(req, res) {
        
        return res.render('users/registro', { title: "Registro", css: "login" });
    },

    crearUsuario: function(req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("users/registro", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        };

        db.User.findOne({
            where: { email: req.body.email}
        })            
        .then(emailToLogin => {
                
            if (emailToLogin) {
                return res.render("users/registro", {
                    errors: {
                        email: {
                            msg: "El email ya esta registrado"
                        }
                    },
                    oldData: req.body
                })

        }});
        
        
        db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                password: bcryptjs.hashSync(req.body.password, 10),
                image: req.file.filename,
                rolId: 2
            })
            
            .then(function(user) {
                emailer.sendMail(user)
                return res.render('users/login');
            })
            

    },

    recuperoPass: function(req, res) {
        return res.render('users/recupero-pass', { title: "Recupero", css: "login," });
    },

    recuperoValidacion: function(req, res) {
        return res.render('users/recupero-validacion', { title: "Recupero", css: "login" });
    },

    admin: function(req, res) {
        return res.render('/users/admin', { title: "Admin", css: "admin" });
    },

    bienvenida: function(req, res) {
        return res.render('./users/bienvenida')
    },

    perfil: function(req, res) {
        console.log(req.cookies.userEmail);
        return res.render('./users/perfil', {
            user: req.session.userLogged
        })
    },

    editarPerfil: function(req, res) {
        return res.render('./users/edit-perfil', {
            user: req.session.userLogged
        })
    },

    actualizarPerfil: function(req, res) {
        
        const { file } =  req
        const { firstName, lastName, email, phone , password } =  req.body
        db.User.findOne({ 
            where: { id: req.params.id },
        })
            .then((users) => {
                users.update({
                    id:"",
                    firstName,
                    lastName,
                    email,
                    phone,
                    password,
                    image: file? file.filename : users.image,
                })
                    .then(() => {
                        res.redirect("./users/edit-perfil")
                    })
            })

    },  
    
    logout: async (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("../")

    },

    show: function(req, res) {
        db.User.findAll()
            .then(function(users) {
                return res.render("./users/userlist", { "users": users });

            })
    },

    delete: function(req, res) {
        db.User.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect('../userlist')
            })
    },
    editUser: function(req, res) {

        db.User.findByPk(req.params.id)
            .then(function(users) {
                return res.render("./users/useredit", { "userAEditar": users });
            });
    },

    updateUser: function (req,res) {
        

        const { file } =  req
        const { firstName, lastName, email, phone , password } =  req.body
        db.User.findOne({ 
            where: { id: req.params.id },
        })
            .then((users) => {
                users.update({
                    id:"",
                    firstName,
                    lastName,
                    email,
                    phone,
                    password,
                    image: file? file.filename : users.image,
                })
                    .then(() => {
                        res.redirect("../userlist")
                    })
            })

    },  
    }

module.exports = userController;