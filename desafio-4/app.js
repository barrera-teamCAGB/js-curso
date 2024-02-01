// Resolución del desafío 4
// Saber cómo usar las funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

// al termino deberiamos poder modificar y poder interactual con el html, para eso es necesario crear uno, mientras sera solo codigo en js

// Desafio 1: Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];


// Desafio 2: Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Desafio 3: Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
// se puede hacer un push para cada uno o todos en una sola linea
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Desafio 4: Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function muestraLista() {
    console.log(`Los elementos de la lista son: ${lenguagesDeProgramacion}`);
}

muestraLista();