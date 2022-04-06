const ARRAY_SIZE = 10;
let uniqueElemets = [];
let personalArray = [18, 7, 89, 33, 65, 31, 30, 22, 70, 90];
let cont = 0;


// Generating a random array from 1 to 90 without duplicates
for (let i = 0; i < ARRAY_SIZE; i++) {
    let number = Math.floor((Math.random() * 90) + 1);
    if (number != uniqueElemets[i]) {
        uniqueElemets[i] = number;
    }
}
// Checking for the occurrencies
function checkOccurencies() {
    let counter = 0;
    for (let i = 0; i < ARRAY_SIZE; i++) {
        if (uniqueElemets[i] == personalArray[i]) {
            counter = counter + 1;
        }
    }
    return counter;
}

cont = checkOccurencies();

// Cambia in uno switch
if (cont == 0) {
    console.log("Nessun risultato");
} else if (cont == 2) {
    console.log("Ambo");
} else if (cont == 3) {
    console.log("Terna");
} else if (cont == 4) {
    console.log("Quaterna");
} else if (cont == 5) {
    console.log("Cinquina");
} else if (cont == 10) {
    console.log("Tombola");
}

function checkVictory() {
    if (cont == 10) {
        document.write("Hai fatto X");
    } else {
        document.write("Mi dispiace, hai perso!");
    }
}



console.log("Array personale: " + personalArray);
console.log("Array senza duplicati: " + uniqueElemets);