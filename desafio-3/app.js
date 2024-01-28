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


// Desafio 2: Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function valorFactorial(numero){
    if (numero === 0 || numero === 1) {
        return 1;
      } else {
        return numero * valorFactorial(numero - 1);
      }
}

let resultadoNumFactorial = valorFactorial(3);
console.log(`el valor del factorial del numero es: ${resultadoNumFactorial} `);


// Desafio 3: Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAPesoMX(dolares) {
    var cotizacionDolar = 0.058;
    var pesoMX = dolares / cotizacionDolar;
    return pesoMX;
  }
  // Ejemplo de uso
  let cantidadDolar = 50;
  let cantidadPesoMX = convertirDolaresAPesoMX(cantidadDolar);
  console.log(`$${cantidadDolar} dólares son $${cantidadPesoMX} pesos mexicanos`);
  
  // Desafio 4: Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

  function areaYperimetro(base, altura) {
    var area = base * altura;
    var perimetro = 2 * (base + altura);
    console.log(`el area de la sala es: ${area} y
                el perimetro de la sala es: ${perimetro}`);
  }

  let base = 30;
  let altura = 20;
  areaYperimetro(base,altura);
  

  // Desafio 5: Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

  function areaYperimetroCircular(radio) {
    var pi = 3.14;
    var diametro = 2 * radio;
    var perimetro = pi * diametro;
    var permitro2daFormula = 2 * pi * radio;
    var area = pi * (radio**2);
    console.log (`el perimetro es ${perimetro} o con la segunda formula es ${permitro2daFormula} y el area es ${area}`);
  }
  areaYperimetroCircular(10);

  
  // Desafio 6: Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
  function tablaMultiplicacion(numero) {
    // iniciamos en cero
    for (i = 0; i <= 10; i++) {
        console.log(`${i} x ${numero} = ${i*numero}`)
    }
  }
  tablaMultiplicacion(2);