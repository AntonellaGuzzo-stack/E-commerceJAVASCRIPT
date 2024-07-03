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
}
renderCarrito(celularStorage);

function NuevoProducto() {
  const addButtonRestar = document.querySelectorAll(".productoRestar")[0];
  addButtonRestar.forEach((button) => {
    button.onclick = (e) => {
      const productId = e.currentTarget.id;
      const selectedProduct = producto.find((producto) => producto.id == productId);
      cardProducts.push(selectedProduct);
      // Actualiza la cantidad en algún elemento HTML
      // Ejemplo: cantidadElement.innerText = selectedProduct.cantidad;
      crearTarjetasProductosCarrito();
      actualizarTotales();
    };
  });

  const addButtonSumar = document.querySelectorAll(".productoSumar")[1];
  addButtonSumar.forEach((button) => {
    button.onclick = (e) => {
      const cantidadElement = document.getElementsByClassName("cantidad")[0];
      // Actualiza la cantidad en algún elemento HTML
      // Ejemplo: cantidadElement.innerText = restarAlCarrito(producto);
      crearTarjetasProductosCarrito();
      actualizarTotales();
    };
  });

  localStorage.setItem("celularProducts", JSON.stringify(celularProducts));
}