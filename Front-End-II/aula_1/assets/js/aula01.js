/*
    Comentários de 
    mais de uma linha
*/

// Comentário de uma linha

//Emite um aviso e trava o carregamento de tela
// alert("Trava o carregamento da tela")

// "Print em JS"
console.log("Hello World")

//Se refere ao documento html ao qual ele está sendo vinculado
//e está buscando o id desejado

    //.innerText é só para colocar um texto (não dá pra colocar html)
document.getElementById("p1").innerText = "Aula 01 + Js"

    //.innerHTML permite que escrevamos html também
document.getElementById("p2").innerHTML = "Alterado com <strong>JS</strong>"
