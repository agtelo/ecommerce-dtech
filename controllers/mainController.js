module.exports = {

    // Definimos un método llamado index,
    // que recibirá los datos de la petición (req)
    // y la respuesta que enviará el server (res)

    index: function(req, res) {
        return res.render('index')
    }

}