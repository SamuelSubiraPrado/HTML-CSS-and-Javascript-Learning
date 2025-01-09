/*
até 1412 -> 0.075
*/

let descVT = 0;
let descVR = 0;
let descINSS = 0;
let salarioLiquido = 0;
let salLiq = document.getElementById("salLiq");
let DescVt = document.getElementById("descVt");
let DescVr = document.getElementById("descVr");
let DescInss = document.getElementById("descInss");
// let nome = document.getElementById("nome");
// let cargo = document.getElementById("cargo");

//Variaveis para armazenar os descontos

btnCalcular = document.getElementById("calcular");
btnCalcular.addEventListener("click", function(){
    let salBruto = parseFloat(document.getElementById("salBruto").value);

    if (salBruto <= 1412){
        descINSS = salBruto * 0.075;
    } else if(salBruto > 1412 && salBruto <= 2666.68){
        descINSS = salBruto * 0.09;
    } else if(salBruto > 2666.68 && salBruto <= 4000.03){
        descINSS = salBruto * 0.12;
    } else if(salBruto > 4000.03 && salBruto <= 7786.02){
        descINSS = salBruto * 0.14;
    } else{
        descINSS = 7786.02 * 0.14;
    }

    descVT = salBruto * 0.06;
    descVR = 0.01;
    salarioLiquido = salBruto - descINSS - descVR - descVT;

    DescVt.value = descVT;
    DescVr.value = descVR;
    DescInss.value = descINSS;
    salLiq.value = salarioLiquido;
})

//VETORES
//let / var / const
let nomes = ["Fulano", "Fulana", "Maria", "Marcos"];
let diversosValores = ["Fulano", 123, "123"];

for(let item in nomes){
    prompt(nomes[item])
}