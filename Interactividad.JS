let btnacademias = document.getElementById("btnleermas");
let academias = document.getElementById("academias");

btnacademias.addEventListener('click',toggleText);

function toggleText() {
academias.classList.toggle('show');
}

let btntecno = document.getElementById("btntecno");
let tecnologias = document.getElementById("tecnologias");

btntecno.addEventListener('click',toggleText2);

function toggleText2() {
    tecnologias.classList.toggle('show');
}