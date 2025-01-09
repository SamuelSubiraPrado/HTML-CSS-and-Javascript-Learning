/*
Variavel: Espaço de memória que irá armazenar um valor somente 
durante a execução de um script.

Tipos de variavies: voláteis, constantes, estáticas.

formas de criar variaveis: 
var (var não tem verificação)
let (não deixa criar variáveis com nomes iguais)
const (Variavel constante)
*/

var numero = 2
var numero2 = 5
let nome = "Samuel"
//var nome - erro!
const idade = 20

var resultado = numero + numero2

//.innerText é só para colocar um texto (não dá pra colocar html)
document.getElementById("var-1").innerHTML = "<br><b>Multiplicação</b><br> " + numero + " x " + numero2 + " = " + (numero * numero2)
document.getElementById("var-2").innerHTML = "<br><b>Divisão </b><br> "+ numero + " / " + numero2 + " = " + (numero2 / numero)
document.getElementById("var-3").innerHTML = "<br><b>Subtração </b><br> " + numero + " - " + numero2 + " = " + (numero2 - numero)
