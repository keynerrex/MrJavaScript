//Operadores De Comparacion

let a = 3,
  b = 2,
  c = "3";

let z = a == b; //Se revisa el valor sin importar el tipo
console.log(z); //false

z = a === c; //Revisa los valores pero tambien los tipos
console.log(z); //c es un string, distinto tipo

z = a == c; //Revisa Contenido
console.log(z);
