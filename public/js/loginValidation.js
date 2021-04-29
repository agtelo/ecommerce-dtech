window.addEventListener("load", function() {
    let formulario = document.querySelector("form.reservation");

    /**/
    let mayusculas = /^[A-Z]+$/;

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let campoEmail = document.getElementById("email");
        if (campoEmail.value.length < 3) {
            alert("El mail debe contener mas de 3 caracteres");
        }
        if (campoEmail.value == "") {
            alert("Por favor completa el mail");
        }

        let campoPassword = document.getElementById("pwd");

        if (campoPassword.value == "") {
            alert("Debes ingresar tu password");
        }

        if (campoPassword.value.length < 8) {
            alert("La contraseña debe tener mas de 8 caracteres");
        }
        if (campoPassword.value = mayusculas) {
            alert("La contraseña debe tener al menos 1 mayuscula");
        }
    })




})