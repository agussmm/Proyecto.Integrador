let queryString = window.location.search;
let parameters = new URLSearchParams(queryString);
let id = parameters.get("id");

let detalleContedor = document.querySelector(".detalle"); 
let reviewsContedor = document.querySelector(".reviews-seccion");

fetch(`https://dummyjson.com/products/${id}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
    let tagsHtml = "";
    for (let i = 0; i < data.tags.length && i<3; i++) {
        tagsHtml += `<li class="tag">${data.tags[i]}</li>`;
    }

    let productoHtml = `
    <div class="detalle-foto">
    <img src="${data.images[0]}" alt="${data.title}">
    </div>

    <div class="detalle-info">
    <p class= "marca">${data.brand ? data.brand : `Sin marca registrada`}</p>
    <h1>${data.title}</h1>
    <p class="precio-grande">$ ${data.price}</p>
    <p class="descripcion">${data.description}</p>
    <p class="dato"><strong>Categoria:</strong> <a href="./category.html?category=${data.category}" style="text-decoration:underline;">${data.category}</a></p>
    <p class="dato"><strong>stock:</strong> ${data.stock} unidades </p>
    <ul class="tags">
    ${tagsHtml}
    </ul>
    </div>
    `;
    detalleContedor.innerHTML = productoHtml;

    let reviewsHtml = `<h2 class="Titulo-seccion">Reviews</h2>`;
    for (let i = 0; i < data.reviews.length; i++) {
        let review = data.reviews[i];

    let fecha = new Date(review.date).toLocaleDateString(); 

    reviewsHtml += `
    <article class="review">
    <p class="rating">⭐️ ${review.rating}/5 </p>
    <p> ${review.comment}</p>
    <p class="review-datos">${review.reviewerName} - ${fecha}</p>
    </article>
    `;
}

    reviewsContedor.innerHTML = reviewsHtml;

})
.catch(function (error) {
    console.log("Error trayendo el producto: ", error);

});

