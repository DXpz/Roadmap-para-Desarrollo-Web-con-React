// Ejemplo practico de Var, Let, Const

//Se quiere pintar una pared cuadrada y se necesita sacar el calculo de cuanta pintura se necesita.para poder pintarla, RECORDATORIO = 1 litro de pintura rinde 10 metros cuadrados.

// Datos:
//La pared mide 4m * 4m
//¿Cual es el area de la pared?
// ¿Cuantos litros de pintura se necesitan?
// utilizar var, let y const para resolver el problema.

// 1. Declarar las variables
var Lado = 4; // en metros 
const LitroP = 10; // en metros cuadrado 
let Area; // en metros cuadrados
let LitrosNecesarios // en litros

// 2. Calcular el area de la pared
Area = Lado * Lado;
// 3. Calcular la cantidad de pintura necesaria
LitrosNecesarios = Area / LitroP;
// 4. Imprimir los resultados
console.log("El area de la pared es de " + Area + " metros cuadrados");
console.log("Se necesitan " + LitroP + " litros de pintura");
