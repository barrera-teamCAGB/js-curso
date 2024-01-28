// Resolución del desafío 3
// Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

// al termino deberiamos poder modificar y poder interactual con el html, para eso es necesario crear uno, mientras sera solo codigo en js

// Desafio 1: Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(altura, peso) {
    return peso/(altura*altura);
    // la operacion para elevar a una potencia es ** y la potencia
    //(peso/(altura**2))
}

let resultadpIMC = calcularIMC(1.65, 68);
console.log(`tu Indice de Masa Corporal es ${resultadpIMC} `);

