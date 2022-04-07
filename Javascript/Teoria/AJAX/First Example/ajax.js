const ajax = () => {

    const call = new XMLHttpRequest();

    let content = document.getElementById('content');
    let br = document.createElement('BR');


    call.onreadystatechange = function() {
        if (this.readyState == 4) {
            const res = JSON.parse(this.responseText);
            for (let i = 0; i < res.length; i++) {
                let div = document.createElement('DIV');
                // Creo i paragrafi
                let p = document.createElement('P');
                let p2 = document.createElement('P');
                let p3 = document.createElement('P');
                let p4 = document.createElement('P');

                // Assegno ad ogni paragrafo un valore
                p.appendChild(document.createTextNode(res[i].userId));
                p2.appendChild(document.createTextNode(res[i].id));
                p3.appendChild(document.createTextNode(res[i].title));
                p4.appendChild(document.createTextNode(res[i].body));

                // Aggiungo gli elementi creati al DIV di BASE
                div.appendChild(p)
                div.appendChild(p2)
                div.appendChild(p3)
                div.appendChild(p4)
                content.appendChild(div)
                content.appendChild(br)
            }
        }
    };

    // true indica se la vogliamo asincorna
    call.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    call.send(null);
}