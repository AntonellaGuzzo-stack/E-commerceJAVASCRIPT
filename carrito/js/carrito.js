
let cardStorage = localStorage.getItem("cardProducts");
cardStorage = JSON.parse(cardStorage);

let cardContainer = document.getElementById("card-section");

function renderCarrito (cardItems){
    cardItems.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h2 class="detalles">${producto.nombre}</h2>
                          <p class="Precio">${producto.precio}</p>`
        cardContainer.appendChild(card)
    })
};

renderCarrito(cardStorage);