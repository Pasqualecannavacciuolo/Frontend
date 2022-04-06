const ARRAY_SIZE = 10;
let array = [];

// Generating a random array with unique integer numbers
while (array.length < ARRAY_SIZE) {
    var numero = Math.floor(Math.random() * 10) + 1;
    if (array.indexOf(numero) === -1) {
        array.push(numero);
    }
}

// Inverting the array
let inverted_array = [];
let j = -1;
for (let i = ARRAY_SIZE; i >= 0; i--) {
    inverted_array[j] = array[i];
    j = j + 1;
}

// Sorting the inverted array
let tmp = 0;
let sorted_array = [].concat(inverted_array);

for (let k = 0; k < ARRAY_SIZE; k++) {
    for (let y = k + 1; y < ARRAY_SIZE; y++) {
        if (sorted_array[k] > sorted_array[y]) {
            tmp = sorted_array[k];
            sorted_array[k] = sorted_array[y];
            sorted_array[y] = tmp;
        }
    }
}


console.log("Starting array: " + array)
console.log("Inverted array: " + inverted_array)
console.log("Sorted array: " + sorted_array)