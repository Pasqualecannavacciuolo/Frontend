const ajax = () => {

    const call = new XMLHttpRequest();

    let content = document.getElementById('content');
    let br = document.createElement('BR');


    call.onreadystatechange = function() {
        if (this.readyState == 4) {
            const res = JSON.parse(this.responseText);
            for (let i = 0; i < res.length; i++) {
                // Wrapper
                let div = document.createElement('DIV');
                // Creo i paragrafi
                let p = document.createElement('P');
                p.classList.add('userId');
                let p2 = document.createElement('P');
                p2.classList.add('Id');
                let p3 = document.createElement('P');
                p3.classList.add('title');
                let p4 = document.createElement('P');
                p4.classList.add('body');

                // Assegno ad ogni paragrafo un valore
                p.appendChild(document.createTextNode("UserId: " + res[i].userId));
                p2.appendChild(document.createTextNode("Id: " + res[i].id));
                p3.appendChild(document.createTextNode("Title: " + res[i].title));
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
    // Make the button invisible after we print the result
    document.getElementById("generate").style.display = "none";
}