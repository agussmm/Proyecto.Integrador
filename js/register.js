let formRegistro = document.querySelector(".formulario");
let emailRegistro = document.querySelector("#email");
let passwordRegistro = document.querySelector("#password");
let password2Registro = document.querySelector("#password2");
let errorRegistro = document.querySelector(".mensaje-register");

formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

    if (emailRegistro.value == "") {
        errorRegistro.innerText = "El mail es obligatorio";
    } else if (passwordRegistro.value == "") {
        errorRegistro.innerText = "La contraseña es obligatoria";
    } else if (passwordRegistro.value.length < 6) {
        errorRegistro.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else if (passwordRegistro.value != password2Registro.value) {
        errorRegistro.innerText = "Las contraseñas no coinciden";
    } else if { 
       this.submit ();
    }
});
      