const paginaCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="modal-header-title">Carrito</h1>`;
  modalContainer.append(modalHeader);


  modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio} $</p>
        <span class="restar"> - </span>
        <p>${producto.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total:$${producto.cantidad * producto.precio}</p>
        <span class="delete-product"> ❌ </span>`;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
      if (producto.cantidad !== 1) {
        producto.cantidad--;
        saveLocal();
        paginaCarrito();} 
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      producto.cantidad++;
      saveLocal();
      paginaCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(producto.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `Total a pagar:$${total}`;
  modalContainer.append(totalBuying);

 

  const botonPagar = document.createElement("div");
  botonPagar.className = "boton-pagar";
  botonPagar.innerHTML = `Finalizar Compra`;
  modalContainer.append(botonPagar);
  botonPagar.addEventListener("click", () => {
    finalizar();
  });

  const vaciarCarrito = document.createElement("div");
  vaciarCarrito.innerHTML = "Vaciar Carrito";
  vaciarCarrito.className = "boton-vaciar";

  vaciarCarrito.addEventListener("click", () => {
    carrito = []
    localStorage.clear();
    paginaCarrito();
    carritoCounter();
  })
  modalContainer.append(vaciarCarrito);
};

verCarrito.addEventListener("click", paginaCarrito)

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);
  console.log(foundId);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });
  carritoCounter();
  saveLocal();
  paginaCarrito();
};

const carritoCounter = () => {
  const carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

const finalizar = () =>{
  Swal.fire({
    title: "Quieres Finalizar la Compra?",
    customClass: "alert2",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#16586b",
    confirmButtonWidth: 50,
    cancelButtonColor: "#1d96b8",
    confirmButtonText: "Si, ir a pagar!"
  }).then(async (result) => {
    if (result.isConfirmed) {
        const { value: formValues } = await Swal.fire({
          title: "Completa con tus Datos",
          customClass: "datos",
          html: `<h5>NOMBRE</h5>
            <input id="swal-input1" class="swal2-input">
            <h5>DNI</h5>
            <input id="swal-input2" class="swal2-input">`,
          focusConfirm: false,
          preConfirm: () => {
            return [
              nombre= document.getElementById("swal-input1").value,
              dni= document.getElementById("swal-input2").value,
            ];
          }
        });
      if (formValues) {
          const texto = Object.values(formValues).join(' <br> ');
          Swal.fire(texto);
          localStorage.clear();
          }}
        })  
}
  
