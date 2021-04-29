window.addEventListener("load", function() {
    let formulario = document.querySelector("form.reservation");
    formulario.addEventListener("submit", function(e) {

        let errores = [];

        let campoEmail = document.getElementById("email");
        if (campoEmail.value.length < 3) {
            errores.push("El mail debe contener mas de 3 caracteres");
        }
        if (campoEmail.value == "") {
            errores.push("Por favor completa el mail");
        }

        let campoPassword = document.getElementById("pwd");

        if (campoPassword.value == "") {
            errores.push("Debes ingresar tu password");
        }

        if (campoPassword.value.length < 8) {
            errores.push("La contraseña debe tener mas de 8 caracteres");
        }
        if (!/[A-Z]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 mayuscula");
        }
        if (!/[0-9]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 Numero");
        }
        if (!/[!@#$%^&*]/.test(campoPassword.value)) {
            errores.push("La contraseña debe tener al menos 1 Simbolo");
        }


        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector("div.errores ul")
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"

            }

        }

    })




})