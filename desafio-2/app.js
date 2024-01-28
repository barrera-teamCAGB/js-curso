// Resolución del desafío 2
// Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.
// crearemos un html basico con botones para generar cada desafio

// Desafio 1: Crear una función que muestre "¡Hola, mundo!" en la consola.
function bienvenida() {
    console.log("¡Hola, mundo!");
    return;
}
bienvenida();


// Desafio 2: Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function bienvenidaConNombre (nombre) {
    console.log(`Hola, ${nombre}`);
    return;
}
bienvenidaConNombre("aqui va mi nombre");


// Desafio 3: Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNum(numero){
    return numero*2;
}
let resultadoNumDoble = dobleNum(32); 
console.log(`El doble del numero es ${resultadoNumDoble}`);


// Desafio 4: Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioTresNum (num1, num2, num3) {
    return (num1+num2+num3)/3;
}
let resultadoPromedioTresNum = promedioTresNum(20,20,20);
console.log(`El promedio de los 3 numeros es ${resultadoPromedioTresNum}`);

// Desafio 5: Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numMayor(num1, num2) {
    if (num1>num2) {
        return num1;
    } else {
        return num2;
    }
    // forma resumida return num1 > num2 ? num1 : num2;
}
let resultadoNumMayor = numMayor(20,30);
console.log(`El mayor de los dos numeros es ${resultadoNumMayor}`);

// Desafio 6: Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function alCuadrado(numCuadrado) {
    return numCuadrado*numCuadrado;
}
let resultadoNumCuadrado = alCuadrado(9);
console.log(`El cuadrado del numero es ${resultadoNumCuadrado}`);