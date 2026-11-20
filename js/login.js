let formLogin = document.querySelector(".formulario");

let campoEmail = document.querySelector("#email");

let campoPassword = document.querySelector("#password");

let mensajeLogin = document.querySelector(".mensaje-login");



formLogin.addEventListener('submit', function(event) {
    event.preventDefault() ;

    if (campoEmail.value == "") {
        mensajeLogin.innerText = "El mail es obligatorio"; 
    } else if (campoPassword.value == "") {
        mensajeLogin.innerText = "La contraseña es obligatoria"; 
    } else if (campoPassword.value.length < 6) {
        mensajeLogin.innerText = "La contraseña debe tener al menos 6 caracteres";
    } else {
        localStorage.setItem('emailUsuario', campoEmail.value);
          this.submit();
 }

}
)