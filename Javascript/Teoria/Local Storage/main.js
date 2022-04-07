const cookie = () => {
    const name = prompt("Inserisci nome: ", "Pasquale");
    document.cookie = `NomeUtente= ${name};`;
}

cookie();

const localStorage = () => {
    window.localStorage.setItem("Username", "Pasquale");
    alert(window.localStorage.getItem("Username"));
}

localStorage();