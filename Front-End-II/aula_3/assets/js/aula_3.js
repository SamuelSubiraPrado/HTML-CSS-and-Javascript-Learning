/* Prompts em JavaScript

OBS: Prompt gera strings
formato:  let variavel = prompt("Mensagem")
*/

let nome = prompt("Digite o nome do colaborador")
let cargo = prompt("Digite o cargo:")
let salario = prompt("Digite o Salário bruto")

document.getElementById("nome").innerHTML = "<b>Nome: </b>" + nome
document.getElementById("cargo").innerHTML = "<b>Cargo: </b>" + cargo
document.getElementById("salario").innerHTML = "<b>Salario: </b>" + salario

let descontoVT = parseFloat(salario)*0.06
document.getElementById("desconto-vt").innerHTML = "<b>Desconto VT: </b>" + descontoVT

let descontoVR = parseFloat(salario)*0.03
document.getElementById("desconto-vr").innerHTML = "<b>Desconto VR: </b>" + descontoVR

let salarioLiquido = parseFloat(salario) - descontoVR - descontoVT
document.getElementById("salario-liquido").innerHTML = "<b>Salário Liquido: </b>" + salarioLiquido
