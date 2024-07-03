const producto = [
    {
        id: 1,
        nombre: "Samsung",
        precio: 150000,
        img: "https://walmartsv.vtexassets.com/arquivos/ids/296356-800-600?v=638131197827170000&width=800&height=600&aspect=true",
    },
    {
        id: 2,
        nombre: "Motorola",
        precio: 100000,
        img: "https://i1.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/03/g30-paml0001in-motorola-original-imagyyvwnngbqrvj.jpeg?ssl=1&quality=80&w=367&h=416",
    },
    {
        id: 3,
        nombre: "Apple",
        precio: 250000,
        img: "https://coolboxpe.vtexassets.com/arquivos/ids/335067-800-450?v=638388568456100000&width=800&height=450&aspect=true",
    },
    {
        id: 4,
        nombre: "Xiamo",
        precio: 150000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWn6A1mEFXD1lK2RfG1CLSeeErVeOQxTK3g&s",
    },
    {
        id: 5,
        nombre: "Realme",
        precio: 205000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrPpacKeLIjQvA7FzPhxd85uQnaEUcSD-_g&s",
    },
    {
        id: 6,
        nombre: "Huawei",
        precio: 150000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEJcIbzf0nKDieLdny4hm7oWQLfvftLMSaA&s",
    },
];

function renderProducto (productsArray){
    productsArray.forEach(producto => {
        const celular = document.createElement("div")
        celular.classList = "tarjeta-producto"
        celular.innerHTML = `<img class="imagen" src="${producto.img} width="350px" alt="Producto 1">
                          <h2 class="informacion">${producto.nombre}</h2>
                          <p id="precioCarrito" class="informacion-precio">$${producto.precio}</p>
                          <button class= "productoAgregar" id="${producto.id}">Comprar</button>`
        productsContainer.appendChild(celular);
    });
    addToCardButton()
};
renderProducto(producto);