
const productos = [
    {
        id: 1,
        nombre: "Televisor",
        precio: 15000
    },
    {
        id: 2,
        nombre: "Celular",
        precio: 15000
    },
    {

        id: 3,
        nombre: "Heladera",
        Precio: 15000
    },
    {
        id: 4,
        nombre: "Televisor",
        precio: 15000
    },
    {
        id: 5,
        nombre: "Celular",
        precio: 15000
    },
    {
        id: 6,
        nombre: "Heladera",
        precio: 15000
    }
]

let cardProducts = [];

let productsContainer = document.getElementById("products-container");
function renderProductos (productsArray){
    productsArray.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<img class="imagen" width="350px" alt="Producto 1">
                          <h2 class="detalles">${producto.nombre}</h2>
                          <p class="Precio">${producto.precio}</p>
                          <button class= "productoAgregar" id="${producto.id}">Comprar </button>`
        productsContainer.appendChild(card)
    })

    addToCardButton()
};
renderProductos(productos);

function addToCardButton (){
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button  => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selectedProduct = productos.find(producto => producto.id == productId)

            cardProducts.push (selectedProduct)
            console.log (cardProducts)
        }
    })

};