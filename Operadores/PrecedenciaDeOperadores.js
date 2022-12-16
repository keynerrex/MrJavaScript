let a = 3,
  b = 2,
  c = 1,
  d = 4;
//Se evalua a * b y se asigna a z
let z = a * b;

let z2 = a * b + c;
console.log(z);
console.log(z2);

//Se evalua izquierda- derecha
//Prioridad de multiplicacion  y luego la suma(Como las matematicas)
z = c + a * b;
console.log(z);

let z3 = c + (a * b) / d;
console.log(z3);

let z4 = ((c + a) * b) / c;
console.log(z4);

