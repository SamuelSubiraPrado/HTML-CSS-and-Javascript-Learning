//Array
//let, var ou const

//Array que pode armazenar multiplos valores
//let nomes = ["Fulano", "Fulana", "Marcos", "Maria"];
//let misturados = ["Maria", 61, "21/08/1958", 1.2];

//Adicionar itens a lista (No fim da lista) - push()
//nomes.push("Renata");

//Adicionar itens a lista (No início da lista) - push()
//nomes.unshift("Samuel");

//Remover o ultimo elemento da lista - pop()
//nomes.pop();

//Remove o primeiro item da lista - shift()
//nomes.shift();

//Retorna o tamanho da lista - length()
//nomes.length;

//--------------------------------------------------------------------------

let button = document.getElementById("btn-inserir");
let listaCompras = [];
let item = document.getElementById("item");

button.addEventListener("click", function(){
    listaCompras.push(item.value);
    console.log(listaCompras);
    item = "";
});
