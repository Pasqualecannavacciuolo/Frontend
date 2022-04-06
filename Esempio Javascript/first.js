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
function conversion(n) {
    var decimal = parseInt(n, 2);
    document.write("<p>");
    document.write(decimal);
    document.write("</p>");
}

conversion("00010101");
conversion("11001010");
conversion("10010110");