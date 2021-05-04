window.addEventListener("load", () => {

    document.querySelector("#name").addEventListener("keyup", function(e) {
        
        var onlyLetters = /^[A-Za-z]+$/;
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un titulo</li>"
        }

        else if (!onlyLetters.test(this.value.replaceAll(" ", ""))){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>El titulo debe contener solo letras</li>"
        }
    
        else if (this.value.length < 5 ){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>El titulo  debe contener mas de 5 caracteres</li>"
        }
    
        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }
    })

    document.querySelector("#description").addEventListener("keyup", function(e) {
        
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar una descripción</li>"
        }

        
        else if (this.value.length < 20 ){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>La descripción debe contener al menos 20 caracteres</li>"
        }
    
        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }
    })


    document.querySelector("#price").addEventListener("keyup", function(e) {
        const validacionNum = /[0-9]/;
        
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un precio</li>"
        }

        else if (!validacionNum.test(this.value)){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Solo puedes ingresar números</li>"
        }
                
        
        else if (this.value.length < 8 ){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un teléfono valido</li>"
        }

        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }
    })

    document.querySelector("#image").addEventListener("change", function(e) {
        const validacionExt = /(.*?)\.(jpg|jpeg|png|svg)$/
        
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar una imagen de producto</li>"
        }        
        
        if (!validacionExt.test(this.value)){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Las extensiones permitidas son .jpg, .jpeg, .png, .svg</li>"
        }

        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }
    })

})








/*window.addEventListener("load", function() {

    let formulario = document.querySelector("form.reservation");

    formulario.addEventListener("submit", function(e) {
        let errores = [];


        let campoNombre = document.getElementById("name");

        if (campoNombre.value == "") {
            errores.push("Debes ingresar un Nombre al producto");
            campoNombre.classList.add("app-form-control-fail");

        } 

        if (campoNombre.value.length < 5) {
            errores.push("El nombre debe contener mas de 5 caracteres");
            campoNombre.classList.add("app-form-control-fail");
        } else {
            campoNombre.classList.remove("app-form-control-fail");
            campoNombre.classList.add("app-form-control-correct");
        }

        let campoDescripcion = document.getElementById("description");

        if (campoDescripcion.value == "") {
            errores.push("Debes ingresar la descripción del producto");
            campoDescripcion.classList.add("app-form-control-fail");

        } else {
            campoDescripcion.classList.remove("app-form-control-fail");
            campoDescripcion.classList.add("app-form-control");
        }

        if (campoDescripcion.value.length < 20) {
            errores.push("El nombre debe contener mas de 20 caracteres");
            campoDescripcion.classList.add("app-form-control-fail");
        }


        if (errores.length > 0) {
            e.preventDefault();
            document.querySelector("div.errores ul").innerHTML = ""
            let ulErrores = document.querySelector("div.errores ul")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }
    })




})*/