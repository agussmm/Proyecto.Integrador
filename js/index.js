let grillaUno = document.querySelector(".grilla-uno");
let grillaDos = document.querySelector(".grilla-dos");



fetch('https://dummyjson.com/products/category/groceries')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);


let productos = "";
for (let i = 0; i < data.products.length; i++) {
      productos += 
       `<article>
          <div class="foto">
            <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
          </div>
          <h3>${data.products[i].title}</h3>
          <p class="descripcion">${data.products[i].description}</p>
          <p class="precio">$ ${data.products[i].price}</p>
          <a href="./product.html?id=${data.products[i].id}" 
          class="boton">ver detalle</a>
        </article>`;
    }
    grillaUno.innerHTML = productos;
})
  .catch(function(error) {
    console.log("Error: "+error);
  });

fetch('https://dummyjson.com/products/category/smartphones')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

let productosDos = "";
for (let i = 0; i < data.products.length; i++) {
      productosDos += 
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
    grillaDos.innerHTML = productosDos;
})
  .catch(function (error) {
    console.log("Error: " + error);
  });