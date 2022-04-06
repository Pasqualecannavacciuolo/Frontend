function generateTable() {
    let myTableDiv = document.getElementById("myDynamicTable");

    let table = document.createElement('TABLE');
    table.border = '1';

    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (let j = 1; j <= 10; j++) {
            let td = document.createElement('TD');
            td.width = '25';
            td.appendChild(document.createTextNode(i * j));
            tr.appendChild(td);
        }
    }
    myTableDiv.appendChild(table);
}