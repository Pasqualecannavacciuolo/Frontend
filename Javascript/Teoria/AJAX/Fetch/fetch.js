const ajaxFetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()) // Ottengo la risposta
        .then(response => console.log(response)) // Gestisco SUCCESSO
        .catch(() => "Alert error") // Gestisco ERRORE
};