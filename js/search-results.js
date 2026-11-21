let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get('busqueda');

let tituloBusqueda = document.querySelector(".titulo-busqueda");
let grillaBusqueda = document.querySelector(".grilla-busqueda");
let sinResultados = document.querySelector(".sin-resultados");

tituloBusqueda.innerText = "Resultados de búsqueda para: " + terminoBuscado;

    fetch("https://dummyjson.com/products/search?q=" + terminoBuscado)
    .then(function (response) {
        return response.json ();
    })
    .then (function (data) {
        console.log(data);

        let productos = data.products;
        let cantidadProductos = productos.length;

        if (cantidadProductos == 0) {
            sinResultados.innerText = "No hay resultados para el término: " + terminoBuscado;
        } else {
            for (let i = 0; i< productos.length; i++) {
                let producto = productos [i];
                grillaBusqueda.innerHTML = grillaBusqueda.innerHTML + `<article>                <div class="foto">
                    <img src="${producto.thumbnail}" alt="${producto.title}">
                </div>
                <h3>${producto.title}</h3>
                <p class="descripcion">${producto.description}</p>
                <p class="precio">$ ${producto.price}</p>
                <a href="./product.html?id=${producto.id}" class="boton">ver detalle</a>
            </article>`;
            }
        }
    })
    .catch (function (error) {
        console.log('El error es: ' + error);
    });