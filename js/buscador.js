let formBuscador = document.querySelector(".buscador");
let campoBusqueda = document.querySelector(".buscador input");
let errorBusqueda = document.querySelector(".error-b|");

formBuscador.addEventListener("submit",fuction(event) { 
    event.preventDefault ();
    if (campoBusqueda.value == "") {
        errorBusqueda.innerText = "El campo de busqueda no puede estar vacio";
} else if (campoBusqueda.value.length < 3) {
    errorBusqueda.innerText = "El termino buscado debe tener al menos 3 caracteres";
    } else {
        this.submit ();
    }
});