// Appena il DOM è stato caricato fai delle operazioni
document.addEventListener('DOMContentLoaded', function() {

    let container = document.getElementById('container').classList.add('classAdded');
    let containerTitle = document.getElementsByClassName('cont-title')[0].classList.add('bold');
    let containerParagraph = document.getElementsByClassName('cont-paragraph')[0].classList.add('italic');
    let containerButton = document.querySelector('.btn').innerHTML = 'Cambiato Premimi';
})