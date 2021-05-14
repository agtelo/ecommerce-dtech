const submit = require("../database/config/submit")

const mainController = {
    
    index: function(req,res){
        return res.render ('index', {title: "Home", css:"home"});
    },

    contacto: function(req,res){
        return res.render ('contacto', {title: "Contacto", css: "contacto"});
    },
    submit: function(req, res){
        let message = req.body;
        
         submit.sendMail(message)
        return res.render ('contacto', {title: "Contacto", css: "contacto"});
    },
    nosotros: function(res,res){
        return res.render ('about', {title: "Quienes Somos", css: "contacto"});
    },
    condiciones: function(res,res){
        return res.render ('condiciones', {title: "Terminos y Condiciones", css: "contacto"});
    }, 
    cookies: function(res,res){
        return res.render ('cookies', {title: "Politica Cookies", css: "contacto"});
    }, 
    privacidad: function(res,res){
        return res.render ('privacidad', {title: "Politica Privacidad", css: "contacto"});
    } 
    
}


module.exports = mainController;

