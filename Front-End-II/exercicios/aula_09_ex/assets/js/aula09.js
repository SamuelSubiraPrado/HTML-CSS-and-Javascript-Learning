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
let telefone = document.getElementById("telefone");
let nome = document.getElementById("nome");
let button = document.getElementById("btn-inserir");
let listaContatos = [];
let contatos = "";


button.addEventListener("click", function(){
    if(telefone.value != ""  || nome.value != ""){
        listaContatos.push(telefone.value, nome.value);
        //console.log(listaContatos);
        contatos = contatos + ("<br>" + nome.value + "<br>Telefone: " + telefone.value + "<br>")
        document.getElementById("listas").innerHTML = contatos;
        telefone.value = "";
        nome.value = "";
    }
});

