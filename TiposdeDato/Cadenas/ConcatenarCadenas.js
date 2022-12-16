//Concatenar Cadena
var nombre = "Keyner";
var apellido = "Oliveros";

var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = "Keyner" + " " + "Oliveros";
console.log(nombreCompleto2);

var x = nombre + 19 + 20; //No se suma

console.log(x);

x = nombre + (19 + 20); //Asi seria suma
console.log(x);

//Izquierda a derecha
x = 2 + 4 + nombre;

console.log(x);
//Contexto de String
