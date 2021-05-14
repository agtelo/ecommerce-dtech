window.addEventListener("load", () => {


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


})
