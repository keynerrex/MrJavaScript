var numero = 5;
var falso = false;
console.log(numero);

var edad = 19;
console.log("Mi edad es:" + edad);

let miVariable;
const miVariable2 = 20;

//
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

if ((numero = 19)) {
  console.log("Tengo 19");
} else {
  console.log("No tenes 19");
}

function saludar(nombre, edad) {
  console.log("Hola " + nombre + " tengo " + edad);
}

saludar("Keyner", 19);

function mult(num1, num2) {
  let result = num1 * num2;
  return result;
}

let recibir = mult(2, 2);
console.log(recibir);

//Arrays

let arreglo1 = ["Keyner", "Santiago", "Oliveros", "Florez"];

console.log(arreglo1);
for (let i = 0; i < 4; i++) {
  console.log("Accediendo al indice " + i);
  let mostrarArreglo = arreglo1[i];
  console.log(mostrarArreglo);
}

//objetos

let persona = {
  nombre: "Keyner",
  edad: 19,
  masculino: true,
};
persona.comidaFavorita = "Pizza";

console.log(persona);
console.log(persona.comidaFavorita);
persona.edad = 18;
console.log(persona.edad);

let persona2 = {
  nombre: "Santiago",
  edad: 20,
  masculino: true,
};
console.log(persona2);

let arregloObjetos = [persona, persona2];



