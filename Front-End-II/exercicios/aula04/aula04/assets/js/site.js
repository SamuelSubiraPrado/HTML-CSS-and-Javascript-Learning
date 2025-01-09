

document.getElementById("selecionarReal").innerText = "Real" //Texto da Label com id 'selecionarReal' no div seletor
document.getElementById("selecionarDolar").innerText = "Dolar" //Texto da Label com id 'selecionarDolar' no div seletor

document.getElementById("digitarValor").innerHTML = "Valor em ____:" //Opção de Real em Texto da Label (titulo) em cima do input de numero
document.getElementById("ValorResultante").innerHTML = "Valor em ____:" //Opção de DOLAR em Texto da Label (titulo) em cima do input de numero

document.getElementById("btn-converterValores").innerHTML = "Converter" //Texto para o botão de converter os valores

document.getElementById("infoCotacao").innerText = "Cot. Atual"
document.getElementById("infoValorDolar").innerText = "0:0"


//Declarações de variaveis
let inputValor = document.getElementById("inputReal") //Variavel do input 'inputReal' que captura o valor
let showDolar = document.getElementById("resultado") //Variavel do label 'resultado' que demonstra o valor convertido

let checkReal = document.getElementById("selecionarRealInput") //Selecionar conversão para Real
let checkDolar = document.getElementById("selecionarDolarInput") //Selecionar conversão para Dolar

//Funções que detectam o clique usando as variaveis declaradas acima, com isso elas mudam o valor em texto informado
checkReal.addEventListener("click", function() {
    document.getElementById("digitarValor").innerHTML = "Valor em Real:"
    document.getElementById("ValorResultante").innerHTML = "Valor em Dolar:"
    document.getElementById("infoCotacao").innerText = "Cot. Atual"
    document.getElementById("infoValorDolar").innerText = "5:1"
})


checkDolar.addEventListener("click", function() {
    document.getElementById("digitarValor").innerHTML = "Valor em Dolar:"
    document.getElementById("ValorResultante").innerHTML = "Valor em Real:"
    document.getElementById("infoCotacao").innerText = "Cot. Atual"
    document.getElementById("infoValorDolar").innerText = "1:5"
})





let soma = 0 //Declaração de variavel
let botao = document.getElementById("btn-converterValores") //Variavel do button 'btn-converterValores'

botao.addEventListener("click", function() {
    if(document.getElementById("selecionarRealInput").checked == true) {
        
        soma = parseFloat(inputValor.value) / 5
        console.log("Valor do Real convertido para Dolar: "+ soma)
        showDolar.innerHTML = "Conversão do valor para $ (Dolar): "+ soma
    }
    if(document.getElementById("selecionarDolarInput").checked == true) {

        soma = parseFloat(inputValor.value) * 5
        console.log("Valor do Dolar convertido para Real: "+ soma)
        showDolar.innerHTML = "Conversão do valor para R$ (Real): "+ soma
    } 
    console.log("Valor Real: "+ inputReal.value)
    console.log("Valor Convertido: "+ soma)
    
    
    
})


