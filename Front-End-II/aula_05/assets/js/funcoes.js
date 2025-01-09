let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("btn-calcular");

/*
Funções: Armazenam rotinas a serem executadas quando chamadas
*/

function calcular(){
    document.getElementById("resultado").innerHTML = parseFloat(numero1.value) + parseFloat(numero2.value);
}

btnCalcular.addEventListener("click", function(){
    calcular();
})