let emailGuardado = localStorage.getItem("emailUsuario");

let itemLogin = document.querySelector(".item-login");

let itemRegister = document.querySelector(".item-register");

let itemSaludo = document.querySelector(".item-saludo");

let itemLogout = document.querySelector(".item-logout");

if (emailGuardado !== null) {
    itemSaludo.innerText = "Bienvenido: " + emailGuardado;
    itemLogin.style.display = "none";
    itemRegister.style.display = "none";
} else {
    itemSaludo.style.display = "none";
    itemLogout.style.display = "none";

}

