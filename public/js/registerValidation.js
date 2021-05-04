window.addEventListener("load", () => {

    document.querySelector("#firstName").addEventListener("keyup", function(e) {
        
        var onlyLetters = /^[A-Za-z]+$/;
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un nombre</li>"
        }

        else if (!onlyLetters.test(this.value.replaceAll(" ", ""))){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Tu nombre debe contener solo letras</li>"
        }
    
        else if (this.value.length < 3 ){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Tu nombre debe contener mas de 3 caracteres</li>"
        }
    
        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }
    })

    document.querySelector("#lastName").addEventListener("keyup", function(e) {
        var onlyLetters = /^[A-Za-z]+$/;
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un apellido</li>"
        }

        else if (!onlyLetters.test(this.value.replaceAll(" ", ""))){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Tu apellido debe contener solo letras</li>"
        }
        
        else if (this.value.length < 3 ){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Tu apellido debe contener mas de 3 caracteres</li>"
        }
    
        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }
    })

    document.querySelector("#email").addEventListener("keyup", function(e) {
        const validacionEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un email</li>"
        }        
        
        else if (!validacionEmail.test(this.value)){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un email valido</li>"
        }

        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }
    })

    document.querySelector("#password").addEventListener("keyup", function(e) {
        const validacionMayus = /[A-Z]/; 
        const validacionNum = /[0-9]/; 
        const validacionSim = /[!@#$%^&*]/;

        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un password</li>"
        }

        else if (this.value.length < 8 ){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Tu contaseña debe contener al menos 8 caracteres</li>"
        }

        else if (!validacionMayus.test(this.value)) {
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>La contraseña debe tener al menos 1 mayúscula</li>"
        }

        else if (!validacionNum.test(this.value)) {
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>La contraseña debe tener al menos 1 número</li>"
        }

        else if (!validacionSim.test(this.value)) {
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>La contraseña debe tener al menos 1 simbolo</li>"
        }

        else {
            document.querySelector("div.errores ul").innerHTML = ""
            this.classList.remove("app-form-control-fail");
            this.classList.add("app-form-control-correct");
        }


    })

    document.querySelector("#phone").addEventListener("keyup", function(e) {
        const validacionNum = /[0-9]/;
        
        if (this.value == ""){
            this.classList.remove("app-form-control");
            this.classList.add("app-form-control-fail");
            this.classList.remove("app-form-control-correct");
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar un teléfono</li>"
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
            document.querySelector("div.errores ul").innerHTML = "<li>Debes ingresar una imagen de perfil</li>"
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
    formulario.addEventListener("keyup", function(e) {
        let errores = [];


        let campoFirstName = document.getElementById("firstName");

        if (campoFirstName.value == "") {
            errores.push("Debes ingresar tu nombre");
            campoFirstName.classList.remove("app-form-control");
            campoFirstName.classList.add("app-form-control-fail");
            campoFirstName.classList.remove("app-form-control-correct");

        }

        if (campoFirstName.value.length < 2) {
            errores.push("Tu nombre debe contener mas de 2 caracteres");
            campoFirstName.classList.remove("app-form-control");
            campoFirstName.classList.add("app-form-control-fail");
            campoFirstName.classList.remove("app-form-control-correct");
        
        } 
        
        else {
            campoFirstName.classList.remove("app-form-control-fail");
            campoFirstName.classList.add("app-form-control-correct");
        }






        let campoLastName = document.getElementById("lastName");


        if (campoLastName.value == "") {
            errores.push("Debes ingresar tu apellido");
            campoLastName.classList.remove("app-form-control");
            campoLastName.classList.add("app-form-control-fail");
            campoLastName.classList.remove("app-form-control-correct");

        } 

        if (campoLastName.value.length < 2) {
            errores.push("El mail debe contener mas de 2 caracteres");
            campoLastName.classList.remove("app-form-control");
            campoLastName.classList.add("app-form-control-fail");
            campoLastName.classList.remove("app-form-control-correct");
        }

        else {
            campoLastName.classList.remove("app-form-control-fail");
            campoLastName.classList.add("app-form-control-correct");
        }

        let campoEmail = document.getElementById("email");
        const exRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (campoEmail.value == "") {
            errores.push("Debes ingresar tu email");
            campoEmail.classList.remove("app-form-control");
            campoEmail.classList.add("app-form-control-fail");
            campoEmail.classList.remove("app-form-control-correct");

        } 
        
        if (campoEmail.value.length < 3) {
            errores.push("El mail debe contener mas de 3 caracteres");
            campoEmail.classList.remove("app-form-control");
            campoEmail.classList.add("app-form-control-fail");
            campoEmail.classList.remove("app-form-control-correct");
        } 

        if (!exRe.test(campoEmail)){
            errores.push("Debes ingresar un email valido");
            campoEmail.classList.remove("app-form-control");
            campoEmail.classList.add("app-form-control-fail");
            campoEmail.classList.remove("app-form-control-correct");

        }
        
        else {
            campoEmail.classList.remove("app-form-control-fail");
            campoEmail.classList.add("app-form-control-correct");
        }


        

        let campoPassword = document.getElementById("password");

        if (campoPassword.value == "") {
            errores.push("Debes ingresar tu password");
            campoPassword.classList.remove("app-form-control");
            campoPassword.classList.add("app-form-control-fail");
            campoPassword.classList.remove("app-form-control-correct");

        }

        if (campoPassword.value.length < 8) {
            errores.push("La contraseña debe al menos 8 caracteres");
            ccampoPassword.classList.remove("app-form-control");
            campoPassword.classList.add("app-form-control-fail");
            campoPassword.classList.remove("app-form-control-correct");
        }
        if (!/[A-Z]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 mayúscula");
            campoPassword.classList.remove("app-form-control");
            campoPassword.classList.add("app-form-control-fail");
            campoPassword.classList.remove("app-form-control-correct");
        }
        if (!/[0-9]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 número");
            campoPassword.classList.remove("app-form-control");
            campoPassword.classList.add("app-form-control-fail");
            campoPassword.classList.remove("app-form-control-correct");
        }
        if (!/[!@#$%^&*]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 simbolo");
            campoPassword.classList.remove("app-form-control");
            campoPassword.classList.add("app-form-control-fail");
            campoPassword.classList.remove("app-form-control-correct");;
        } 
        
        else {
            campoPassword.classList.remove("app-form-control-fail");
            campoPassword.classList.add("app-form-control-correct");
            
        }

        let campoPhone = document.getElementById("phone");


        if (campoPhone.value == "") {
            errores.push("Debes ingresar tu telefono");
            campoPhone.classList.add("app-form-control-fail");
        } 
        
        if (!/[0-9]/.test(campoPassword.value)) {
            errores.push("Debes ingresar tu telefono");
            campoPhone.classList.add("app-form-control-fail");
        } 
        
        else {
            campoEmail.classList.remove("app-form-control-fail");
            campoEmail.classList.add("app-form-control-correct");

        }

        let campoImage = document.getElementById("image");


        if (campoImage.value == "") {
            errores.push("Debes ingresar una imagen");
            campoImage.classList.add("app-form-control-fail");
        } 
        
        else {
            campoEmail.classList.remove("app-form-control-fail");
            campoEmail.classList.add("app-form-control");

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