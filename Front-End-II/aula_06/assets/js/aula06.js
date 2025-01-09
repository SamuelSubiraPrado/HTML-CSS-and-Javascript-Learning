/*Condicionais

- == igual
- > maior que
- < menor que
- >= 
- <=
- != ou (<>) Diferente
- === igualdade estrita
- || or
- && and

if(condição){}
else{}

*/

let frequencia = parseFloat(prompt("Frenquência (0% a 100%):"));


if (frequencia > 75){

    let nota1 = parseFloat(prompt("Nota1:"));
    let nota2 = parseFloat(prompt("Nota2:"));
    let nota3 = parseFloat(prompt("Nota3:"));
    let nota4 = parseFloat(prompt("Nota4:"));
    let media = (nota1 + nota2 + nota3 + nota4)/4;

    if(media <= 4){
        alert("Deu ruim, aluno reprovado");
    }
    else if(media > 4 && media < 6){
        alert("Aluno está em recuperação")
    }
    else{
        alert("Aluno aprovado");
    }
}
else{
    alert("Aluno reprovado por falta de frequência")
}