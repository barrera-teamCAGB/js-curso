// Desafios

// Desafio 1
// clonacion del repositorio alura-es-cursos/js-curso-2

// Desafio 2
// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
//document.querySelector('h1').innerHTML = "Hora del Desafío";
// la otra opcion es asignandole una variable
let tituloH1 = document.querySelector('h1');
tituloH1.innerHTML = "Hora del Desafío";

// Desafio 3
// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
// en el archivo html colocamos la funcion que vamos a crear de java script, con el evento onclick
function clickBtnConsole() {
    console.log("El botón console fue clicado");
}

// Desafio 4
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function clickBtnPrompt () {
    let ciudadBrasil = prompt("Dime el nombre de una ciudad de Brasil: ");
    alert ("Estuve en " + ciudadBrasil + " y me acordé de ti");
}

// Desafio 5
// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function clickBtnAlerta () {
    alert("Yo amo JS");
}

//Desafio 6
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function suma() {
    alert("Dame 2 numeros y realizare la sume de ellos");
    // dado que los prompt devuelven string, usaremos parseInt para que devuelva enteros
    let numero1 = parseInt(prompt("Numero 1: "));
    let numero2 = parseInt(prompt("Numero 2: "));
    let total = numero1 + numero2;
    console.log(typeof(total));
    alert (`La suma de ${numero1} + ${numero2} = ${total}`);
}