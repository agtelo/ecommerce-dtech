const mainController = {
    
    index: function(req,res){
        return res.render ('index', {title: "Home", css:"home"});
    },
   
    login: function(req,res){
        return res.render ('login' , {title: "Login", css:"login"});
    },

    registro: function(req,res){
        return res.render ('registro', {title: "Registro", css: "login"});
    },

    recuperoPass: function(req,res){
        return res.render ('recupero-pass', {title: "Recupero" ,css: "login,"} );
    },

    contacto: function(req,res){
        return res.render ('contacto'), {title: "Contacto", css: "contacto"};
    },

    producto: function(req,res){
        return res.render ('productos' , {title: "Producto", css: "producto"});
    },

    carrito: function(req,res){
        return res.render ('carrito', {title: "Carrito", css: "carrito"});
    },

    desarrollo: function(req,res){
        return res.render ('desarrollos', {title: "Desarrollos", css: "desarrollo"});
    },
    
    admin: function(req,res) {
        return res.render ('admin', {title: "Admin", css: "admin"});
    }

}



module.exports = mainController;

