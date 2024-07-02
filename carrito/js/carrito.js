
let cardStorage = localStorage.getItem("cardProducts");
cardStorage = JSON.parse(cardStorage);
let cardContainer = document.getElementById("card-section");
const cantidadElement = document.getElementById("cantidad");
const precioElement = document.getElementById("precio");
const contenedorTarjetas = document.getElementById("card-section");
const carritoVacioElement = document.getElementById("carrito-vacio");
const totalesContainer = document.getElementById("totales");

function renderProducto (cardItems){
  cardItems.forEach(producto => {
      const card = document.createElement("div")
      card.innerHTML = `<h2 class="detalles">${producto.nombre}</h2>
                        <p class="Precio">${producto.precio}</p>
                        <div><button>-</button>
                        <span class="cantidad">${producto.cantidad}</span>
                        <button>+</button></div>`                 
      cardContainer.appendChild(card)})
      addButton = document.getElementsByTagName("button")[0]
      addButton.addEventListener ("click", (e) => {
        const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
        cantidadElement.innerText = restarAlCarrito(producto);
        crearTarjetasProductosCarrito();
        actualizarTotales();
      });
      addButton = document.getElementsByTagName("button")[1]
      addButton.addEventListener ("click", (e) => {
        const cantidadElement = e.target.parentElement.getElementsByClassName("cantidad")[0];
        cantidadElement.innerText = agregarAlCarrito(producto);
        crearTarjetasProductosCarrito();
        actualizarTotales();
    });
}
renderProducto(cardStorage);


