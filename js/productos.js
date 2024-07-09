const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");

window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
});


const productos = [
  {
    id: 1,
    nombre: "Samsung",
    precio: 150000,
    img: "https://walmartsv.vtexassets.com/arquivos/ids/296356-800-600?v=638131197827170000&width=800&height=600&aspect=true",
    cantidad: 1,
},
{
    id: 2,
    nombre: "Motorola",
    precio: 100000,
    img: "https://i1.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/03/g30-paml0001in-motorola-original-imagyyvwnngbqrvj.jpeg?ssl=1&quality=80&w=367&h=416",
    cantidad: 1,
},
{
    id: 3,
    nombre: "Apple",
    precio: 250000,
    img: "https://coolboxpe.vtexassets.com/arquivos/ids/335067-800-450?v=638388568456100000&width=800&height=450&aspect=true",
    cantidad: 1,
},
{
    id: 4,
    nombre: "Xiamo",
    precio: 150000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWn6A1mEFXD1lK2RfG1CLSeeErVeOQxTK3g&s",
    cantidad: 1,
},
{
    id: 5,
    nombre: "Realme",
    precio: 205000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsrPpacKeLIjQvA7FzPhxd85uQnaEUcSD-_g&s",
    cantidad: 1,
},
{
    id: 6,
    nombre: "Huawei",
    precio: 150000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEJcIbzf0nKDieLdny4hm7oWQLfvftLMSaA&s",
    cantidad: 1,
},
]