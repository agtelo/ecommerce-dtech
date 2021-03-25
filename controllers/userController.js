const fs = require("fs");
const path = require('path');
let usuariosFilePath = path.resolve(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const bcryptjs = require('bcryptjs');
const { validationResult } = require("express-validator");

const userController = {
    
    login: function(req,res){
        return res.render ('users/login');
    },
    ingresoUsuario: function (req, res) {
        const resultValidation = validationResult(req);
        let userALogearse = usuarios.find( usuario => usuario.email == req.body.email);

        if (resultValidation.errors.length > 0) {
            return res.render("users/login", { 
                errors: resultValidation.mapped(), 
                oldData: req.body
            });
    
        };

        if (userALogearse){
            let validatePassword = bcryptjs.compareSync(req.body.password , userALogearse.password);
            if (validatePassword) {
            return res.redirect("../products/carrito");
        }
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
        return res.render('users/registro', {title: "Registro", css: "login"});
    },
    crearUsuario: function (req,res) {
        let usuarioNuevo = {
            first_name: req.body.nombre,
            last_name: req.body.apellido,
            email: req.body.email,
            phone: req.body.telefono,
            password: bcryptjs.hashSync(req.body.password,10),
            image: req.file.filename
            
        };
        usuarios.push(usuarioNuevo);
        let usuarioSubir = JSON.stringify(usuarios, null , 2);
		fs.writeFileSync(usuariosFilePath ,usuarioSubir)
        res.render('users/usuario', {"usuarioNuevo" : usuarioNuevo});
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
    show: function (req,res) {
        return res.render ('./users/usuario')
    }
    
    

}



module.exports = userController;