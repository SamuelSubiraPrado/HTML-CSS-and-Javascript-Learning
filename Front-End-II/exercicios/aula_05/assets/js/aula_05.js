/*
EVENTOS:

click: escuta o clique do mouse

change: escuta a modificação de um elemento

submit: evento utilizado em formulario

keyup, keypress, keydown: eventos para teclado
*/

let nome = document.getElementById("name");
let idade = document.getElementById("idade");
let telefone = document.getElementById("telefone");
let email = document.getElementById("email");
let button = document.getElementById("resultado_click")
resultado = "Seus Dados:"

//Evento: change
nome.addEventListener("change", function(){
    console.log(nome.value)
    resultado += "<br> Nome: " + nome.value;
})
idade.addEventListener("change", function(){
    resultado += "<br> Idade: " + idade.value;
})
telefone.addEventListener("change", function(){
    resultado += "<br> Telefone: " + telefone.value;
})
email.addEventListener("change", function(){
    resultado += "<br> Email: " + email.value;
})

button.addEventListener("click", function(){
    document.getElementById("resultado").innerHTML = resultado
})
