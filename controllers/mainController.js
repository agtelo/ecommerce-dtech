const mainController = {
    
    index: function(req,res){
        return res.render ('index', {title: "Home", css:"home"});
    },
   
    login: function(req,res){
        return res.render ('login');
    },

    registro: function(req,res){
        return res.render ('registro');
    },

    recuperoPass: function(req,res){
        return res.render ('recupero-pass');
    },

    contacto: function(req,res){
        return res.render ('contacto');
    },

    producto: function(req,res){
        return res.render ('producto');
    },

    carrito: function(req,res){
        return res.render ('carrito');
    },

    desarrollo: function(req,res){
        return res.render ('desarrollo');
    },


}

module.exports = mainController;