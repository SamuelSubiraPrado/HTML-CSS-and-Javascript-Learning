/*
EVENTOS:

click: escuta o clique do mouse

change: escuta a modificação de um elemento

submit: evento utilizado em formulario

keyup, keypress, keydown: eventos para teclado
*/

let selectfrutas = document.getElementById("frutas");
let preco = document.getElementById("preco");
let qtd = document.getElementById("qtd");
let total = document.getElementById("total");
 
//Evento: change
selectfrutas.addEventListener("change", function(){
    console.log(selectfrutas.value);
    preco.value = selectfrutas.value;
})

//Evento: keyup, keypress, keydown
qtd.addEventListener("keyup", function(){
    console.log(qtd.value);
    total.value = (preco.value * qtd.value)
})