
var nombre = "Anto";
let edad = 18;
var lugar = prompt ("Ingresa el Lugar");

alert("Quieres Viajar " + nombre);

if (edad >= 18) {
    console.log ("Puedes Reservar Hoteles");
}
else {
    console.log ("Necesitas un Adulto")
}

switch (lugar) {
    case "Argentina":
        console.log ("Buenos Aires");
    break
    case "Colombia":
        console.log ("Barranquillas");
    break
    case "España":
        console.log ("Madrid");
    break
    default:
        console.log ("Ingresa Otro Lugar")
    break
};

let Vector = ["Pileta","Desayuno","Muy Visual","Atencion","Posicion"];
console.log (Vector[3]);