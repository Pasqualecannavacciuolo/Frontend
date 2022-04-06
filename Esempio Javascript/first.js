/*alert("Primo alert");
document.write("Hello from JS File");
alert("Secondo alert");*/


// Function
/*function test(a, b) {
    document.write(a);
    document.write(b);
}

test("PRIMO", "SECONDO");*/

// Funzione che converte un numero da BINARIO => DECIMALE
function conversion() {
    let binary = prompt("Inserire numero binario: ");
    let decimal = parseInt(binary, 2);
    console.log(binary + " convertito in decimale => " + decimal);
}

// Javascript consente di creare un'array misto
let array = [1, 2, "Ciao", 4, 5];
array.forEach(function(n) {
    console.log(n);
})

// Definizione di una matrice
let matrix = [
    []
];
matrix.push(1);
console.log(matrix);

// Input da tastiera mediante un'alert
let nome = prompt("Mi chiamo")
console.log("Nome: " + nome)