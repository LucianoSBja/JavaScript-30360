//declaramos una variable
let resultado = "";
//BUCLE DO WHILE PARA INTRODUCIR VARIAS CADENAS
do {
    let cadena = prompt("Introduce un dato");
    //SI LA VARIABLE RESULTADO ESTÁ VACÍA
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        //CONCATENAMOS CON GUIÓN
        resultado = resultado + " - " + cadena;
    }
    //MIENTRAS SE PULSE ACEPTAR EN EL MENSAJE EMERGENTE CONFIRM
} while (confirm("Desea seguir?"));
//SI SE PULSÓ CANCELAR IMPRIMIMOS EL RESULTADO
alert(resultado);