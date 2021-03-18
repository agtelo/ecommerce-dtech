const fs = require("fs");
const path = require('path');
let usuariosFilePath = path.resolve(__dirname, '../data/users.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const bcrypt = require('bcryptjs');

const userController = {
    
    login: function(req,res){
        return res.render ('users/login' , {title: "Login", css:"login"});
    },

    registro: function(req,res){
        return res.render ('users/registro', {title: "Registro", css: "login"});
    },
    crearUsuario: function (req,res) {
        let usuarioNuevo = {
            username: req.body.usuario,
            email: req.body.email,
            firt_name: req.body.nombre,
            last_name: req.body.apellido,
            phone: req.body.telefono,
            password: bcrypt.hashSync(req.body.password,10),
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

    admin: function(req,res) {
        return res.render ('/users/admin', {title: "Admin", css: "admin"});
    },
    show: function (req,res) {
        return res.render ('./users/usuario')
    }
    
    

}



module.exports = userController;