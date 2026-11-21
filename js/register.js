let formRegistro = document.querySelector(".formulario");
let emailRegistro = document.querySelector("#email");
let passwordRegistro = document.querySelector("#password");
let password2Registro = document.querySelector("#password2");
let errorRegistro = document.querySelector(".mensaje-register");

formRegistro.addEventListener("submit", function(event) {
    event.preventDefault();

   let password = passwordRegistro.value;
    let cantidadCaracteres = password.length;

    if (emailRegistro.value == "") {
        mensajeRegistro.innerText = "El email es obligatorio";
    } else if (password == "") {
        mensajeRegistro.innerText = "La contraseña es obligatoria";
    } else if (cantidadCaracteres < 6) {
        mensajeRegistro.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else if (password != password2Registro.value) {
        mensajeRegistro.innerText = "Las contraseñas no coinciden";
    } else {
        this.submit();
    }
})
      