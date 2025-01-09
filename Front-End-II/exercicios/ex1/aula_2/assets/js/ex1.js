/*
Variavel: Espaço de memória que irá armazenar um valor somente 
durante a execução de um script.

Tipos de variavies: voláteis, constantes, estáticas.

formas de criar variaveis: 
var (var não tem verificação)
let (não deixa criar variáveis com nomes iguais)
const (Variavel constante)
*/

var nome_carro_1 = "FORD NEW FIESTA"
var valor_carro_1 = "38.900"
var ano_carro_1 = 2016
var km_carro_1 = "79.000 km"
var pot_carro_1 = 127

var nome_carro_2 = "PEUGEOT 208"
var valor_carro_2 = "62.900"
var ano_carro_2 = 2021
var km_carro_2 = "40.000 km"
var pot_carro_2 = 102

var nome_carro_3 = "FUSION TITANIUM"
var valor_carro_3 = "80.900"
var ano_carro_3 = 2019
var km_carro_3 = "84.000 km"
var pot_carro_3 = 170

//.innerText é só para colocar um texto (não dá pra colocar html)
document.getElementById("nome_carro_1").innerHTML = nome_carro_1
document.getElementById("valor-carro1").innerHTML = "R$" + valor_carro_1
document.getElementById("ano-carro1").innerHTML = ano_carro_1
document.getElementById("km-carro1").innerHTML = km_carro_1
document.getElementById("pot-carro1").innerHTML = pot_carro_1 + "cv"

document.getElementById("nome_carro_2").innerHTML = nome_carro_2
document.getElementById("valor-carro2").innerHTML = "R$" + valor_carro_2
document.getElementById("ano-carro2").innerHTML = ano_carro_2
document.getElementById("km-carro2").innerHTML = km_carro_2
document.getElementById("pot-carro2").innerHTML = pot_carro_2 + "cv"

document.getElementById("nome_carro_3").innerHTML = nome_carro_3
document.getElementById("valor-carro3").innerHTML = "R$" + valor_carro_3
document.getElementById("ano-carro3").innerHTML = ano_carro_3
document.getElementById("km-carro3").innerHTML = km_carro_3
document.getElementById("pot-carro3").innerHTML = pot_carro_3 + "cv"
