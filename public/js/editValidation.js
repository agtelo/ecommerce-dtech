window.addEventListener("load", function() {

    let formulario = document.querySelector("form.reservation");

    formulario.addEventListener("submit", function(e) {
        let errores = [];


        let campoNombre = document.getElementById("name");

        if (campoNombre.value == "") {
            errores.push("Debes ingresar un Nombre al producto");
            campoNombre.classList.add("app-form-control-fail");

        } else {
            campoNombre.classList.remove("app-form-control-fail");
            campoNombre.classList.add("app-form-control");
        }

        if (campoNombre.value.length < 5) {
            errores.push("El nombre debe contener mas de 5 caracteres");
            campoNombre.classList.add("app-form-control-fail");
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




})