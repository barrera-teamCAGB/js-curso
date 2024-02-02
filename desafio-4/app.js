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
    let totalElementosEnLaLista = lenguagesDeProgramacion.length;
    console.log(`El total de elementos en la lista es de: ${totalElementosEnLaLista}`);
    console.log(`Los elementos de la lista son: ${lenguagesDeProgramacion}`);
    // tambien por separado con un for
    for (let i = 0; i < totalElementosEnLaLista; i++) {
        console.log(`${i+1} ${lenguagesDeProgramacion[i]}`);
        
    }
}
muestraLista();

// Desafio 5: Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. 
// aqui utilizaremos la forma manual y la funcion ya creada de los array incluida en js que es .reverse();

function muestraInvertido() {
    let totalElementosEnLaLista = lenguagesDeProgramacion.length - 1;
    console.log(`Desplegando la informacion del ultimo al primero:`);
    for (let i = totalElementosEnLaLista; i >= 0; i--) {
        console.log(`${i+1} ${lenguagesDeProgramacion[i]}`);
        
    }
    // utilizando la funcion reverse quedaria y se mostrara la lista invertida
    console.log(lenguagesDeProgramacion.reverse());
}

muestraInvertido();

// Desafio 6: Crea una función que calcule el promedio de los elementos en una lista de números.
// hay una abreviacion para recorrer toda la lista y es con un for each en lugar de colocar todo un for

let listaNumeros = [8, 1, 1, 1];

function promedioNumeros() {
    let sumatoria = 0;
    let promedio = 0;
    let totalElementos = listaNumeros.length;
    
        for (let i = 0; i < totalElementos; i++) {
           sumatoria = listaNumeros[i] + sumatoria;
           // cambiamos la linea de arriba por la siguiente
           // suma += lista[i];
            console.log(`La suma es: ${sumatoria}`);  
        }
        promedio = sumatoria/totalElementos;
        console.log(`El promedio de todos los numeros es: ${promedio}`);  
    }
    promedioNumeros();

    // aqui otra propuesta
    function calcularMedia(lista) {
        let suma = 0;
        for (let i = 0; i < lista.length; i++) {
          suma += lista[i];
        }
        return suma / lista.length;
      }
      
      let media = calcularMedia(listaNumeros);
      console.log('Média:', media);



// Desafio 7: Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let listaNumeros = [8, 5, 14, 41];

function numeroMayorYMenor(lista) {
    // colocamos el primer valor en las variables
    let mayor = lista[0];
    let menor = lista[0];
    // lo repetiremos hasta que pase por todos los numeros de la lista eso lo sacamos con length
    for (let i = 1; i < lista.length; i++) {
        // hacemos enl recorrido y de ser mayor este se guardara en la variable
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        // de la misma manera con el menor pero sin realizar un else
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
}

numeroMayorYMenor(listaNumeros);