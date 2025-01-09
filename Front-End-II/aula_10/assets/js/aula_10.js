 /*
 
Laços de repetição

for()
while()
forEach() / map()

 */

let frutas = ["Maça", "Uva", "Ameixa", "Banana", "Pessego", "Tangerina"];

for(let posicao = 0; posicao < frutas.length; posicao++){
    console.log(frutas[posicao]);
}

console.log("\n");

let cont = 0;

while(cont < frutas.length){
    console.log(frutas[cont]);
    cont++;
}

console.log("\n");

frutas.forEach(fruta => {
    console.log(fruta)
});

console.log("\n");

frutas.map(fruta => {
    console.log(fruta)
});