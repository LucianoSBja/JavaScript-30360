//Saludamos al usuario
function saludo() {
    let nombre = prompt("Hola! Como te llamas?");
    alert(`Hola ${nombre}! Quieres saber el precio de un producto con IVA y sin IVA?`);
}
saludo()

//Pedimos los datos
let precio = Number(prompt("Introduce un precio"));
let iva = Number(prompt("Introduce el iva"));
//Calculamos el IVA
function masIva(precio, iva) {
    iva = iva || 21
    let coniva = (precio + precio * iva / 100);
    return coniva;
}

let resultado = masIva(precio, iva);
//Creamos un condicional
if (iva > 0) {
    resultado;
} 
else {
    precio;
}
document.write("<h1>Precio con IVA: " + resultado);
document.write("<h1>Precio sin IVA: " + precio);