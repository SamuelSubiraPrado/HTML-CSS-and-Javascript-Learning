let nome = document.getElementById("nome");
let materia = document.getElementById("materia");
let bim1 = document.getElementById("bim1");
let bim2 = document.getElementById("bim2");
let bim3 = document.getElementById("bim3");
let bim4 = document.getElementById("bim4");
let btn = document.getElementById("btn-salvar");
let tabela = document.getElementById("tabela");

let materias = [];
let notasB1 = [];
let notasB2 = [];
let notasB3 = [];
let notasB4 = [];
let nomeAluno = "";

btn.addEventListener("click", function(){

    nomeAluno = nome.value;
    materias.push(materia.value);
    notasB1.push(parseFloat(bim1.value));
    notasB2.push(parseFloat(bim2.value));
    notasB3.push(parseFloat(bim3.value));
    notasB4.push(parseFloat(bim4.value));

    materia.value = "";
    bim1.value = "";
    bim2.value = "";
    bim3.value = "";
    bim4.value = "";

    let aux = "";
    
    //Ler e calcular as médias
    for(let pos = 0; pos < materias.length; pos++){

        let media = (notasB1[pos] + notasB2[pos] + notasB3[pos] + notasB4[pos]) / 4;

        aux += `<tr>
                    <td>${materias[pos]}</td>
                    <td>${notasB1[pos]}</td>
                    <td>${notasB2[pos]}</td>
                    <td>${notasB3[pos]}</td>
                    <td>${notasB4[pos]}</td>
                    <td>${media}</td>
                </tr>`;
        
    }

    document.getElementById("nome-titulo").innerHTML = nome.value;
    tabela.innerHTML = aux;
})

