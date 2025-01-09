//Primeira forma de manipulação de formulários em Java Script

let aluno = document.getElementById("aluno")
let serie = document.getElementById("serie")
let materia = document.getElementById("materia")

let botao = document.getElementById("btn-salvar")

/*
    EVENTO CHAMADO CLICK
    Função: addEventListener -> esta função adiciona a escuta a um elemento do html
*/

botao.addEventListener("click", function(){
    //Aqui iremos inserir os comandos JS para a ação do click
    console.log(aluno.value)
    console.log(serie.value)
    console.log(materia.value)
    var jsinfo = "js - info"
    document.getElementById("js").innerHTML = "<br><p " + "id="+ jsinfo + ">" 
                                            + "NOME: " + aluno.value + "</p>"
                                            +
                                            "<br><p " + "id="+ jsinfo + ">" 
                                            + "SERIE: " + serie.value + "</p>"
                                            +
                                            "<br><p " + "id="+ jsinfo + ">" 
                                            + "MATERIA: " + materia.value + "</p>"
});
