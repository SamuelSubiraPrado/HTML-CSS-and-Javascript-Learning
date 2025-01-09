/*
até 1412 -> 0.075
*/

let nome = prompt("Digite o nome do colaborador:");
let cargo = prompt("Digite o cargo:");
let salario = parseFloat(prompt("Digite o salário: R$"));

//Variaveis para armazenar os descontos
let descVT = 0;
let descVR = 0;
let descINSS = 0;

//Guardar o salario líquido
let salarioLiquido = 0;

if (salario <= 1412){
    descINSS = salario * 0.075;
} else if(salario > 1412 && salario <= 2666.68){
    descINSS = salario * 0.09;
} else if(salario > 2666.68 && salario <= 4000.03){
    descINSS = salario * 0.12;
} else if(salario > 4000.03 && salario <= 7786.02){
    descINSS = salario * 0.14;
} else{
    descINSS = 7786.02 * 0.14;
}

descVT = salario * 0.06;

descVR = 0.01;

salarioLiquido = salario - descINSS - descVR - descVT;

let divResultado = document.getElementById("resultado");

divResultado.innerHTML = "<p>Nome Completo: " + nome + "</p>" +
                         "<p> Cargo: " + cargo + "</p>" +
                         "<p> Salário bruto: " + salario + "</p>" +
                         "<p> Desc VT: " + descVT + "</p>" +
                         "<p> Desc VT: " + descVR + "</p>" + 
                         "<p> Desc VT: " + descINSS + "</p>" + 
                         "<p> Salario Líquido: " + salarioLiquido + "</p>";