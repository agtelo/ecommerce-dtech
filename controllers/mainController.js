const mainController = {
    
    index: function(req,res){
        return res.render ('index', {title: "Home", css:"home"});
    },

    contacto: function(req,res){
        return res.render ('contacto', {title: "Contacto", css: "contacto"});
    },

    desarrollo: function(req,res){
        return res.render ('desarrollos', {title: "Desarrollos", css: "desarrollo"});
    },
    
    
}



module.exports = mainController;

