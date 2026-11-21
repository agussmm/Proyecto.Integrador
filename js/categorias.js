let listaCategorias = document.querySelector(".lista-categorias");

fetch('https://dummyjson.com/products/category-list')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let nombreCategoria = data[i];

            listaCategorias.innerHTML = listaCategorias.innerHTML + `<li><a href="./category.html?category=${nombreCategoria}">${nombreCategoria}</a></li>`;
        }
    })
    .catch(function (error) {
        console.log("Error: " + error);
    });