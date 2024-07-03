let cardStorage = localStorage.getItem("cardProducts");
cardStorage = JSON.parse(cardStorage);
let cardContainer = document.getElementById("card-section");
const producto = localStorage.getItem("cardProducts");



function renderCarrito (cardItems){
  cardItems.forEach(producto => {
      const card = document.createElement("div")
      card.classList = "tarjeta-producto"
      card.innerHTML = `<p id="${producto.id}></p>
                        <h2 class="cantidad">${producto.nombre}</h2>
                        <div><button class= "productoRestar">-</button>
                        <p class="Precio">${producto.precio}</p>
                        <button class= "productoSumar">+</button></div>`;                 
      cardContainer.appendChild(card);
  })
}
renderCarrito(cardStorage);

function NuevoProducto (){
  addButton = document.querySelectorAll(".productoRestar")[0]
  addButton.forEach (button => {
    button.onclik = (e) => {
    const cantidadElement =  e.currentTarget.cantidad [0];
    const selectedProduct = producto.find(producto => producto.id == cantidad)
    cardProducts.push (selectedProduct)
    cantidadElement.innerText = restarAlCarrito(producto);
    crearTarjetasProductosCarrito();
    actualizarTotales();
  }});
  addButton = document.querySelectorAll(".productoSumar")[1]
  addButton.forEach (button => {
    button.onclik = (e) => {
    const cantidadElement = document.getElementsByClassName("cantidad")[0];
    cantidadElement.innerText = restarAlCarrito(producto);
    crearTarjetasProductosCarrito();
    actualizarTotales();
  }});
  localStorage.setItem("cardProducts", JSON.stringify(cardProducts))
}
  