let grillaUno = document.querySelector(".grilla-uno");
let grillaDos = document.querySelector(".grilla-dos");



fetch('https://dummyjson.com/products/category/groceries')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);


let productos = "";
for (let i = 0; i < 10; i++) {
      productos += 
       `<article>
          <div class="foto">
            <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
          </div>
          <h3>${data.products[i].title}</h3>
          <p class="descripcion">${data.products[i].description}</p>
          <p class="precio">$ ${data.products[i].price}</p>
          <a href="./product.html?id=${data.products[i].id}" class="boton">ver detalle</a>
        </article>`;
    }
    grillaUno.innerHTML = productos;
})
  .catch(function (error) {
    console.log("Error: " + error);
  });
