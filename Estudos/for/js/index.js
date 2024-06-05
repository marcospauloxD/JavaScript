
/*
let contador;
//               se colocar <= vai ate 10
for (contador = 0; contador < 10; contador ++){
    //As instruções incluídas aqui serão executadas 10 vezes
    /*
    Será exibido o valor da variável contador 10 vezes 
    no Console. O primeiro número será 0 e o último será 9 
    (repare que começamos com a nossa variável contador 
    recebendo o número 0 e sendo incrementada 
    até ser menor do que 10, ou seja, até o número 9.

        console.log(contador);


    */
var ano = new Date().getFullYear();

//esse começa de 1900 ate 2024
/*for (let i = 1900; i <= ano; i++){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option";
}
*/

//Nesse aqui inverte a ordem
/*for(let i = ano; i => 1900; i++){
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}
*/

const carro = ["gol","marea","chevolet","fusca"]
var tamanho = carro.length;

for(let i = 0; i < tamanho; i++){
    document.getElementById("teste").innerHTML += carro[i] + " - ";
}