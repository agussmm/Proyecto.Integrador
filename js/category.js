let queryString = window.location.search;
let parameters = new URLSearchParams(queryString);
let categoria =parameters.get("category")

let grillaCategoria = document.querySelector(".grilla-categoria")

fetch(`https://dummyjson.com/products/category/${categoria}`)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    console.log(data); 
    let productosHtml = ""; 

    for (let i=0; i < data.products.length; i++) {
        productosHtml += `
        <article>
        <div class="foto">
        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
        </div> 
        <h3>${data.products[i].title}</h3>
        <p class="descripcion">${data.products[i].description}</p>
        <p class="precio">$ ${data.products[i].price}</p>
        <a href="./product.html?id=${data.products[i].id}"
        class="boton">ver detalles</a>
        </article>`;
    }
grillaCategoria.innerHTML=productosHtml; 

let tituloCategoria =document.querySelector(".titulo-categoria");
if(categoria){
    tituloCategoria.innerText = categoria; 
}
})

.catch(function(error) {
    console.log("Error cargando la categoria: "+error);
});  