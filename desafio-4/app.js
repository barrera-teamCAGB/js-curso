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
    console.log(`El total de elementos en la lista es de: ${totalElementosEnLaLista}`);
    console.log(`Los elementos de la lista son: ${lenguagesDeProgramacion}`);
}

muestraLista();

// Desafio 5: Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. 
// aqui utilizaremos la forma manual y la funcion ya creada de los array incluida en js que es .reverse();

function muestraInvertido() {
    let totalElementosEnLaLista = lenguagesDeProgramacion.length - 1;
    console.log(`Desplegando la informacion del ultimo al primero:`);
    for (let i = totalElementosEnLaLista; i >= 0; i--) {
        console.log(`${lenguagesDeProgramacion[i]}`);
        
    }
    // utilizando la funcion reverse quedaria
    console.log(lenguagesDeProgramacion.reverse());
}

muestraInvertido();

// Desafio 6: Crea una función que calcule el promedio de los elementos en una lista de números.
// hay una abreviacion para recorrer toda la lista y es con un for each en lugar de colocar todo un for
function promedioNumeros() {
    let sumatoria = 0;
    let promedio = 0;
    let listaNumeros = [8, 1, 1, 1];
    let totalElementos = listaNumeros.length;
    
        for (let i = 0; i < totalElementos; i++) {
           sumatoria = listaNumeros[i] + sumatoria;
            console.log(`La suma es: ${sumatoria}`);  
        }
        promedio = sumatoria/totalElementos;
        console.log(`El promedio de todos los numeros es: ${promedio}`);  
    }
    promedioNumeros();
