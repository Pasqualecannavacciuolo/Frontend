document.addEventListener('DOMContentLoaded', function() {

    let n1, n2, n3, n4;

    // Initializing the variables
    const init = () => {
        n1 = document.querySelector('.n1').innerHTML = generateNumber();
        n2 = document.querySelector('.n2').innerHTML = generateNumber();
        n3 = document.querySelector('.n3').innerHTML = generateNumber();
        n4 = document.querySelector('.n4').innerHTML = generateNumber();
        setTimeout(init, 5000);
    }

    // Function to generate a random number between 1 and 100
    const generateNumber = () => {
        return (Math.floor(Math.random() * 100) + 1);
    }

    // Assigning the random numbers to the 4 squares
    init();

    // 4 operations arrow functions
    let somma = () => {
        return n1 + n2 + n3 + n4
    }

    let sottrazione = () => {
        return n1 - n2 - n3 - n4
    }

    let moltiplicazione = () => {
        return n1 * n2 * n3 * n4
    }

    let divisione = () => {
        return (n1 / n2 / n3 / n4)
    }

    // Choosing which operation to make
    let insertOperation = () => {
        let input = prompt("Insert operation: ");
        switch (input) {
            case '+':
                alert(somma());
                break;
            case '-':
                alert(sottrazione());
                break;
            case '*':
                alert(moltiplicazione());
                break;
            case '/':
                alert(divisione());
                break;

            default:
                break;
        }
    }

});