window.addEventListener("load", function() {

    let formulario = document.querySelector("form.reservation");
    formulario.addEventListener("keyup", function(e) {
        let errores = [];


        let campoFirstName = document.getElementById("firstName");

        if (campoFirstName.value == "") {
            errores.push("Debes ingresar tu nombre");
            campoFirstName.classList.add("app-form-control-fail");

        }

        if (campoFirstName.value.length < 2) {
            errores.push("El mail debe contener mas de 2 caracteres");
            campoFirstName.classList.add("app-form-control-fail");
        
        } else {
            campoFirstName.classList.remove("app-form-control-fail");
            campoFirstName.classList.add("app-form-control-correct");
        }

        let campoLastName = document.getElementById("lastName");


        if (campoLastName.value == "") {
            errores.push("Debes ingresar tu apellido");
            campoLastName.classList.add("app-form-control-fail");

        } 

        if (campoLastName.value.length < 2) {
            errores.push("El mail debe contener mas de 2 caracteres");
            campoLastName.classList.add("app-form-control-fail");
        }

        else {
            campoLastName.classList.remove("app-form-control-fail");
            campoLastName.classList.add("app-form-control-correct");
        }

        let campoEmail = document.getElementById("email");

        if (campoEmail.value == "") {
            errores.push("Debes ingresar tu email");
            campoEmail.classList.add("app-form-control-fail");

        } 
        
        if (campoEmail.value.length < 3) {
            errores.push("El mail debe contener mas de 3 caracteres");
            campoEmail.classList.add("app-form-control-fail");
        } else {
            campoEmail.classList.remove("app-form-control-fail");
            campoEmail.classList.add("app-form-control");
        }


        

        let campoPassword = document.getElementById("password");

        if (campoPassword.value == "") {
            errores.push("Debes ingresar tu password");
            campoPassword.classList.add("app-form-control-fail");

        }

        if (campoPassword.value.length < 8) {
            errores.push("La contraseña debe al menos 8 caracteres");
            campoPassword.classList.add("app-form-control-fail");
        }
        if (!/[A-Z]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 mayúscula");
            campoPassword.classList.add("app-form-control-fail");
        }
        if (!/[0-9]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 número");
            campoPassword.classList.add("app-form-control-fail");
        }
        if (!/[!@#$%^&*]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 simbolo");
            campoPassword.classList.add("app-form-control-fail");
        }
        let campoPhone = document.getElementById("phone");


        if (campoPhone.value == "") {
            errores.push("Debes ingresar tu telefono");
            campoPhone.classList.add("app-form-control-fail");
        } 
        
        if (!/[0-9]/.test(campoPassword.value)) {
            errores.push("Debes ingresar tu telefono");
            campoPhone.classList.add("app-form-control-fail");
        } else {
            campoEmail.classList.remove("app-form-control-fail");
            campoEmail.classList.add("app-form-control-correct");

        }

        let campoImage = document.getElementById("image");


        if (campoImage.value == "") {
            errores.push("Debes ingresar una imagen");
            campoImage.classList.add("app-form-control-fail");
        } else {
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




})