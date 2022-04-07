const cookie = () => {
    const name = prompt("Inserisci nome: ", "Pasquale");
    document.cookie = `NomeUtente= ${name};`;
}

cookie();