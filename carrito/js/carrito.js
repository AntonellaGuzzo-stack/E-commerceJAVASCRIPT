
let cardStorage = localStorage.getItem("cardProducts");
cardStorage = JSON.parse(cardStorage);

let cardContainer = document.getElementById("card-section");

function renderCarrito (cardItems){
    cardItems.forEach(producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h2 class="detalles">${producto.nombre}</h2>
                          <p class="Precio">${producto.precio}</p>`                 
        cardContainer.appendChild(card);


        let eliminar = document.createElement("span");
        eliminar.innerText = "X";
        eliminar.className ="delete-producto";
        card.append(eliminar);

        //eliminar.addEventListener("click", eliminarProducto);//
    })
}
renderCarrito(cardStorage);

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
  }

function actualizarTotales() {
const productos = JSON.parse(localStorage.getItem("cardProducts"));
let cantidad = 0;
let precio = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      cantidad += producto.id;
      precio += producto.precio * producto.cantidad;
    });
  }
  cantidadElement.innerText = cantidad;
  precioElement.innerText = precio;
  if(precio === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
};

