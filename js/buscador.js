let formBuscador = document.querySelector(".buscador");
let campoBusqueda = document.querySelector(".buscador input");
let errorBusqueda = document.querySelector(".error-b|");

formBuscador.addEventListener('submit', function(event) {
    event.preventDefault();

    let textoBuscado = campoBuscar.value;
    let cantidadCaracteres = textoBuscado.length;

    if (textoBuscado == "") {
        mensajeBusqueda.innerText = "El campo de búsqueda no puede estar vacío";
    } else if (cantidadCaracteres < 3) {
        mensajeBusqueda.innerText = "El término buscado debe tener al menos 3 caracteres";
    } else {
        this.submit();
    }
})