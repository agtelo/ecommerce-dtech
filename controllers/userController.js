const fs = require("fs");
const path = require('path');
let usuariosFilePath = path.resolve(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");
const db = require("../database/models");

const userController = {

    login: function(req, res) {
        return res.render('users/login');
    },
    ingresoUsuario: function(req, res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("users/login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        };

        db.User.findOne({
                where: {
                    email: req.body.email
                }

            })
            .then(function(user) {
                return res.render('users/bienvenida', { "user": user });
            })


        if (userALogearse) {
            let validatePassword = bcryptjs.compareSync(req.body.password, userALogearse.password);

            if (validatePassword) {
                delete userALogearse.password;
                req.session.userLogged = userALogearse;
                if (req.body.remember_user) {
                    res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 3 })
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

    },

    registro: function(req, res) {
        res.cookie("testing", "Hola mundo", { maxAge: 1000 * 30 })
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

        db.User.create({
                firstName: req.body.nombre,
                lastName: req.body.apellido,
                email: req.body.email,
                phone: req.body.telefono,
                password: bcryptjs.hashSync(req.body.password, 10),
                image: req.file.filename,
                rolId: 2
            })
            .then(function(user) {
                return res.render('users/bienvenida', { "user": user });
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

    },

    logout: function(req, res) {
        res.clearCookie("userEmail");
        req.session.destroy();
        console.log(req.session)
        return res.render("./index")

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
    
        
        /*const { firstName, lastName , email ,phone , password } = req.body
        const { filename } = req.file
        
        db.User.update({
            id:"",
            firstName, 
            lastName, 
            email,
            phone,
            password,
            image: filename
        }, {
            where : {
                id : req.params.id
            }
        });
        return res.render("./users/useredit/" + req.params.id)*/
                    
    },  
    }

module.exports = userController;