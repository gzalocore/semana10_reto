
// Ejercicio 1

initApp1();

function initApp1() {
    console.log('...Inicializando APP del ejercicio 1');

    const numero1 = 5;
    const numero2 = 3;
    const numeroInvalido = '5';
    
    sumar(numero1, numero2);
    sumar(numeroInvalido, numero2);  
    sumar(numero1, NaN); 
}

function esNumeroValido(valor) {
  return typeof valor === 'number' && !isNaN(valor);
}

function sumar(a, b) {

  if (!esNumeroValido(a) || !esNumeroValido(b)) {
      console.error("Error: Ambos argumentos deben ser números válidos.");
      return;
  }
  

  const resultado = a + b;

  imprimirResultado(resultado);
}

function imprimirResultado(resultado) {
  console.log("La suma es:", resultado);
}

//Ejercicio 2

initApp2();

function initApp2() {
    console.log('...Inicializando APP del ejercicio 2');

    const value = 17;

    // Validacion
    const isNumber = validateValue(value);

    isNumber ? calculateOddOrEven(value) : notNumber(value);
}

function validateValue(valueNumber) {
    let valueIsNumber = typeof valueNumber === 'number' ? true : false;
    return valueIsNumber;
}

function calculateOddOrEven(valueNumber) {
    valueNumber % 2 === 0 ? isEven(valueNumber) : isOdd(valueNumber);
}

function notNumber(value) {
    console.log(`El valor ${value} no es numerico`);
}

function isEven(valueIsNumber) {
    console.log(`Es par el numero ${valueIsNumber}`);
}

function isOdd(valueIsNumber) {
    console.log(`Es impar el numero ${valueIsNumber}`);
}


initApp3();

function initApp3() {
    console.log('...Inicializando APP del ejercicio 3');

    const num1 = 5;
    const num2 = 12;
    const num3 = 9;
    
    const result = findLargestNumber(num1, num2, num3);
    console.log(`El numero mayor es ${result}`);   
}

function isValidNumber(num) {
    return typeof num === 'number' && !isNaN(num);
}

function findLargestNumber(a, b, c) {
    if (!isValidNumber(a) || !isValidNumber(b) || !isValidNumber(c)) {
        return 'Error: Todos los argumentos deben ser números válidos';
    }

    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}


initApp4();

function initApp4() {
    console.log('...Inicializando APP del ejercicio 4');

    const prom = calculateAverage(85, 90, 78, 92);
    console.log(`El promedio es: ${prom}`); 
}

function calculateAverage(grade1, grade2, grade3, grade4) {

    if (!isValidNumber(grade1) || !isValidNumber(grade2) || !isValidNumber(grade3) || !isValidNumber(grade4)) {
        return 'Error: Todas las calificaciones deben ser números válidos';
    }

    const total = grade1 + grade2 + grade3 + grade4;
    const average = total / 4;

    return average;
}

initApp5();

function initApp5() {
    console.log('...Inicializando APP del ejercicio 5');

    let base = 5;
    let altura = 10;
    
    let area = calcularAreaRectangulo(base, altura);
    console.log("El área del rectángulo es: " + area);
}

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}


initApp6();

function initApp6() {
    console.log('...Inicializando APP del ejercicio 6');

    let base = 8; 
    let altura = 5;
    
    let area = calcularAreaTriangulo(base, altura);
    console.log("El área del triángulo es: " + area);
}

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

initApp7();

function initApp7() {
    console.log('...Inicializando APP del ejercicio 7');

    let radio = 7; 

    let area = calcularAreaCircunferencia(radio);
    console.log("El área de la circunferencia es: " + area);
}

function calcularAreaCircunferencia(radio) {
    const pi = 3.14; 
    return pi * radio * radio;
}

initApp8();

function initApp8() {
    console.log('...Inicializando APP del ejercicio 8');

    let numero = -5; 

    let resultado = determinarSigno(numero);

    console.log(resultado);

}

function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es cero.";
    }
}

initApp9();

function initApp9() {
    console.log('...Inicializando APP del ejercicio 9');

    let numero1 = 12;
    let numero2 = 7;  

    if (numero1 !== numero2) {
        let resultado = determinarMenor(numero1, numero2);
        console.log(resultado);
    } else {
        console.log("Los números son iguales. Por favor, usa dos números diferentes.");
    }
}

function determinarMenor(numero1, numero2) {
    if (numero1 < numero2) {
        return `El número ${numero1} es menor que ${numero2}.`;
    } else {
        return `El número ${numero2} es menor que ${numero1}.`;
    }
}

initApp10();

function initApp10() {
    console.log('...Inicializando APP del ejercicio 10');

    let numero = 9;
    let resultado = esDivisibleEntreDos(numero);
    console.log(resultado);
}

function esDivisibleEntreDos(numero) {
    if (numero % 2 === 0) {
        return `${numero} es divisible entre 2.`;
    } else {
        return `${numero} no es divisible entre 2.`;
    }
}

initApp11();

function initApp11() {
    console.log('...Inicializando APP del ejercicio 11');

    let dia = 'Viernes';
    let resultado = verificarDia(dia);
    console.log(resultado);
}

function verificarDia(dia) {
    // Convertir el nombre del día a minúsculas para evitar problemas de mayúsculas/minúsculas
    dia = dia.toLowerCase();
    
    const diasFinDeSemana = ['sábado', 'domingo'];

    // Verificar si el día es fin de semana
    if (diasFinDeSemana.includes(dia)) {
        return `${dia.charAt(0).toUpperCase() + dia.slice(1)} es un fin de semana.`;
    } else {
        return `${dia.charAt(0).toUpperCase() + dia.slice(1)} es un día laborable.`;
    }
}

initApp12();

function initApp12() {
    console.log('...Inicializando APP del ejercicio 12');

let numero = 15; 
let resultado = esDivisiblePorTresYCinco(numero);
console.log(resultado);
}

function esDivisiblePorTresYCinco(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return `${numero} es divisible por 3 y por 5.`;
    } else {
        return `${numero} no es divisible por 3 y por 5.`;
    }
}

initApp13();

function initApp13() {
    console.log('...Inicializando APP del ejercicio 13');

    let numero = 18;
    let resultado = determinarMultiplo(numero);
    console.log(resultado);
}

function determinarMultiplo(numero) {
    if (numero % 2 === 0 && numero % 3 === 0) {
        return `${numero} es múltiplo de ambos, 2 y 3.`;
    } else if (numero % 2 === 0) {
        return `${numero} es múltiplo de 2.`;
    } else if (numero % 3 === 0) {
        return `${numero} es múltiplo de 3.`;
    } else {
        return `${numero} no es múltiplo de 2 ni de 3.`;
    }
}

initApp14();

function initApp14() {
    console.log('...Inicializando APP del ejercicio 14');

    let anioNacimiento = 1990;

    let edad = calcularEdad(anioNacimiento);
    
    console.log(`La edad de la persona es: ${edad} años.`);
}

function calcularEdad(anioNacimiento) {
    const anioActual = new Date().getFullYear(); // Obtener el año actual
    return anioActual - anioNacimiento; // Calcular la edad
}

initApp15();

function initApp15() {
    console.log('...Inicializando APP del ejercicio 15');

    let anhosDeTrabajo = 6; 
    let bono = calcularBono(anhosDeTrabajo);
    console.log(`El bono del trabajador con ${anhosDeTrabajo} años de trabajo es: $${bono}.`);
}

function calcularBono(anhosDeTrabajo) {
    let bono;

    // Determinar el bono basado en los años de trabajo
    if (anhosDeTrabajo >= 1 && anhosDeTrabajo <= 5) {
        bono = anhosDeTrabajo * 100; // Bono por año entre 1 y 5 años
    } else if (anhosDeTrabajo > 5) {
        bono = 1000; // Bono para más de 5 años
    } else {
        bono = 0; // Bono para menos de 1 año
    }

    return bono;
}

initApp16();

function initApp16() {
    console.log('...Inicializando APP del ejercicio 16');

    let edad = 20;
    let resultado = puedeVotar(edad);
    console.log(resultado);

}

function puedeVotar(edad) {
    if (edad >= 18) {
        return "La persona puede votar en las próximas elecciones.";
    } else {
        return "La persona no puede votar en las próximas elecciones.";
    }
}