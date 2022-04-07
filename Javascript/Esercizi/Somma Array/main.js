const ARRAY_SIZE = 10;

let array1 = []
let array2 = []
let arrayrisultante = []

// This function generates a random array between 1 and 10
function generateArray() {
    let arrayTmp = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        let numero = (Math.floor(Math.random() * 10) + 1);
        arrayTmp[i] = numero;
    }
    return arrayTmp;
}

function somma() {
    let arrayTmp = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        arrayTmp[i] = array1[i] + array2[i];
    }
    return arrayTmp;
}

function sottrazione() {
    let arrayTmp = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        arrayTmp[i] = array1[i] - array2[i];
    }
    return arrayTmp;
}

function moltiplicazione() {
    let arrayTmp = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        arrayTmp[i] = array1[i] * array2[i];
    }
    return arrayTmp;
}

function divisione() {
    let arrayTmp = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
        // In questo caso arrotondo il risultato a 2 cifre decimali
        arrayTmp[i] = (array1[i] / array2[i]).toFixed(2);
    }
    return arrayTmp;
}

// This method switches between the 4 operations
function operation(n) {
    switch (n) {
        case '+':
            arrayrisultante = somma();
            break;
        case '-':
            arrayrisultante = sottrazione();
            break;
        case '*':
            arrayrisultante = moltiplicazione();
            break;
        case '/':
            arrayrisultante = divisione();
            break;

        default:
            break;
    }
}

// Populating the 2 arrays
array1 = generateArray();
array2 = generateArray();
// Ottengo l'operazione da effettuare
operation(prompt("Inserisci operazione: "));

// Appena il DOM è stato caricato fai delle operazioni
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.primo-array').innerHTML = 'Primo array: ' + array1.toString();
    document.querySelector('.secondo-array').innerHTML = 'Secondo array: ' + array2.toString();
    document.querySelector('.array-risultante').innerHTML = 'Array risultante: ' + arrayrisultante.toString();
})


console.log(array1);
console.log(array2);
console.log(arrayrisultante);