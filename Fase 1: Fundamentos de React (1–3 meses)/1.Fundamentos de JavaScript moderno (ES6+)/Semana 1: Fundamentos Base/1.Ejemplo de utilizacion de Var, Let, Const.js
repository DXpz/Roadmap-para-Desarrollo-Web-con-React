// Declaracion de variables con var, let y const


// var:

// var nombre = "Hector";
// console.log(nombre);
 
// var es global, se puede acceder desde cualquier parte del codigo, sin embargo, no es recomendado usarlo, ya que puede re-escribirse la variable.

// ejemplo de re-escritura de variable con var

// var nombre = "Hector";
// var tiempo = "10";

// if (tiempo > 2){
//     var nombre = "El nombre cambio";
// }

// console.log(nombre);

// let:

// let nombre = "Hector";
// console.log(nombre);

// A diferencia de var, let es local, se puede acceder desde cualquier parte del codigo, cuanta con una caracteristica importante, se puede re-escribir la variable pero tiene que respetar el scope de la variable.

// ejemplo de re-escritura de variable con let

// let nombre = "Hector";
// let tiempo = "10";

// Los bloques de codigo se pueden crear con {}, es decir que las variables declaradas con let solo son accesibles dentro de ese bloque de codigo.

// if (tiempo > 2){
//     let nombre = "El nombre cambio";
//     console.log(nombre);
// }

// console.log(nombre);

// en let se puede hacer esto 

// let nombre = "Hector";
// nombre = "Juan";

// pero no esto

// let nombre = "Hector";
// let nombre = "Hector2";

// const:

// const es una constante, se puede acceder desde cualquier parte del codigo, sin embargo, no se puede re-escribir la variable.

// const nombre = "Hector";
// const tiempo = "10";

// if (tiempo > 2){
//     const nombre = "El nombre cambio";
//     console.log(nombre);
// }
// console.log(nombre);

// https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/

