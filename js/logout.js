let linkLogout = document.querySelector(".logout");

let liSaludo = document.querySelector(".item-saludo");

let liLogout = document.querySelector(".item-logout");

let liLogin = document.querySelector(".item-login");

let liRegister = document.querySelector(".item-register");


linkLogout.addEventListener('click', function(event) {
    event.preventDefault()

    localStorage.removeItem('emailUsuario');

    liSaludo.style.display = "none";
    liLogout.style.display = "none";
    liLogin.style.display = "block";
    liRegister.style.display = "block";
})