const fs = require("fs");
const path = require('path');
let usuariosFilePath = path.resolve(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");
const db = require("../database/models");

const userController = {
    
    login: function(req,res){
        
        console.log(req.cookies.testing)
        return res.render ('users/login');
    },
    ingresoUsuario: function (req, res) {


        let userALogearse = usuarios.find( usuario => usuario.email == req.body.email);
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("users/login", { 
                errors: resultValidation.mapped(), 
                oldData: req.body
            });
    
        };

        if (userALogearse){
            let validatePassword = bcryptjs.compareSync(req.body.password , userALogearse.password);
            
            if (validatePassword) {
            delete userALogearse.password;
            req.session.userLogged = userALogearse;
            if(req.body.remember_user){
                res.cookie("userEmail" , req.body.email , { maxAge: (1000 * 60) * 3 })
            }
            return res.redirect("../users/perfil");
        };
        return res.render("users/login", {
            errors: { 
                password: { 
                    msg: "Las credenciales son inválidas" }
            }});  
        };
        return res.render("users/login", {
        errors: { 
            email: { 
                msg: "No se encuentra este email en nuestra base de datos" }
        
        },
        oldData : req.body });
        
    },
    
    registro: function(req,res){
        res.cookie("testing" , "Hola mundo", { maxAge: 1000 * 30})
        return res.render('users/registro', {title: "Registro", css: "login"});
    },
    crearUsuario: function (req,res) {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render("users/registro", { 
                errors: resultValidation.mapped(), 
                oldData: req.body
            })};
        
        db.User.create({
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.email,
            phone: req.body.telefono,
            password: bcryptjs.hashSync(req.body.password,10),
            image: req.file.filename,
            rol_id: 2
        })
        .then(function(user){
            return res.render('users/bienvenida', {"user" : user});
        })        

    },

    recuperoPass: function(req,res){
        return res.render ('users/recupero-pass', {title: "Recupero" ,css: "login,"} );
    },
    recuperoValidacion: function(req,res){
        return res.render ('users/recupero-validacion', {title: "Recupero" ,css: "login" } );
    },
    admin: function(req,res) {
        return res.render ('/users/admin', {title: "Admin", css: "admin"});
    },
    bienvenida: function (req,res) {
        return res.render ('./users/bienvenida')
    },
    perfil: function (req,res) {
        console.log(req.cookies.userEmail);
        return res.render ('./users/perfil', { 
            user: req.session.userLogged
        })
    },
    editarPerfil: function (req,res) {
        return res.render ('./users/edit-perfil', { 
            user: req.session.userLogged
        })
    },
    actualizarPerfil: function (req,res) {
    
    },

    logout: function (req, res) {
        res.clearCookie("userEmail");
        req.session.destroy();
        console.log(req.session)
        return res.render("./index")
        
    }
    
};

module.exports = userController;