let celularStorage = localStorage.getItem("celularProducts");
celularStorage = JSON.parse(celularStorage);
let celularContainer = document.getElementById("celulares-section");

function renderCarrito (celularItems){
  celularItems.forEach(producto => {
      const celular = document.createElement("div")
      celular.classList = "tarjeta-producto"
      celular.innerHTML = `<p id="${producto.id}></p>
                        <h2 class="cantidad">${producto.nombre}</h2>
                        <div><button class= "productoRestar">-</button>
                        <p class="Precio">${producto.precio}</p>
                        <button class= "productoSumar">+</button></div>`;                 
      celularContainer.appendChild(celular);
  })
  RestarProducto()
}
renderCarrito(celularStorage);

function RestarProducto() {
  const restarButtons = document.querySelectorAll(".productoRestar");
  restarButtons.forEach(button => {
    button.onclick = (e) => {
      const productId = e.currentTarget.id;
      const selectedProduct = producto.find(producto => producto.id == productId);

      // Verifica si el producto ya está en el arreglo
      const existingProductIndex = celularProducts.findIndex(p => p.id === selectedProduct.id);
      if (existingProductIndex !== -1) {
        // Resta la cantidad
        celularProducts[existingProductIndex].cantidad -= 1;

        // Si la cantidad llega a cero, elimina el producto del arreglo
        if (celularProducts[existingProductIndex].cantidad === 0) {
          celularProducts.splice(existingProductIndex, 1);
        }
      }

      // Actualiza la interfaz y los totales
      crearTarjetasProductosCarrito();
      actualizarTotales();
    };
  });
}