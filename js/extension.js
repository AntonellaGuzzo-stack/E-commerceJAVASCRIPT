const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
  const response = await fetch("../js/data.json");
  const data = await response.json();
  
  data.forEach((producto) => {
    let celular = document.createElement("div");
    celular.className = "card";
    celular.innerHTML = `
      <img src="${producto.img}">
      <h3>${producto.nombre}</h3>
      <p class="price">$${producto.precio}</p>
      <div class="botonesCantidad"> <span class="sacar"> - </span>
      <h4>${producto.cantidad} </h4> 
      <span class="agregar"> + </span>
      </div>`;
  
    shopContent.append(celular);
  const agregarBtn = celular.querySelector(".agregar");
  const sacarBtn = celular.querySelector(".sacar");

  agregarBtn.addEventListener("click", () => {
    producto.cantidad++;
    celular.querySelector("h4").textContent = producto.cantidad;
  });

  sacarBtn.addEventListener("click", () => {
    if (producto.cantidad > 0) {
      producto.cantidad--;
      celular.querySelector("h4").textContent = producto.cantidad;
    }
  });
  
    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";
  
    celular.append(comprar);
    comprar.addEventListener("click", () => {
      const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);
  
      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === producto.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: producto.id,
          img: producto.img,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: producto.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
      }
      Swal.fire({
        position: "top-end",
        customClass: "alert1",
        icon: "success",
        title: "Agregado al carrito",
        showConfirmButton: false,
        timer: 600,
      });
    })})
}
getProducts();

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

