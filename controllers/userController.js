const userController = {
    
    login: function(req,res){
        return res.render ('users/login' , {title: "Login", css:"login"});
    },

    registro: function(req,res){
        return res.render ('/registro', {title: "Registro", css: "login"});
    },

    recuperoPass: function(req,res){
        return res.render ('/recupero-pass', {title: "Recupero" ,css: "login,"} );
    },

    admin: function(req,res) {
        return res.render ('users/admin', {title: "Admin", css: "admin"});
    },
    
    

}



module.exports = userController;