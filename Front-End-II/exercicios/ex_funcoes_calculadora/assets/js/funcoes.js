let numero1 = document.getElementById("numero1");
let operacao = document.getElementById("operacao");
let numero2 = document.getElementById("numero2");
let btnCalcular = document.getElementById("btn-calcular");

/*
Funções: Armazenam rotinas a serem executadas quando chamadas
*/

function calcular(operacao){
    if (operacao == "soma"){
        document.getElementById("resultado").innerHTML = parseFloat(numero1.value) + parseFloat(numero2.value);
    }
    if (operacao == "subtracao"){
        document.getElementById("resultado").innerHTML = parseFloat(numero1.value) - parseFloat(numero2.value);
    }
    if (operacao == "divisao"){
        document.getElementById("resultado").innerHTML = parseFloat(numero1.value) / parseFloat(numero2.value);
    }
    if (operacao == "multiplicacao"){
        document.getElementById("resultado").innerHTML = parseFloat(numero1.value) * parseFloat(numero2.value);
    }
}

btnCalcular.addEventListener("click", function(){
    calcular(operacao.value);
})