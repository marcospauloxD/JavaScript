// 3 FORMAS DE MONTAR UMA LISTA

//const lista = ["arroz", "feijão", "macarrão"];

/* 

cosnt lista = []
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";

*/

//const lista = new Array("arroz","macarrão","feijão");

//FORMAS DE ADICIONAR O VALOR DE DENTRO DE UMA LISTA A UMA VARIAVEL
/*const lista = ["arroz", "feijão", "macarrão"];
let x = lista[2]
alert(x)
*/

//MUDANDO UM VALOR DE DENTRO DA LISTA
/*const lista = ["arroz", "feijão", "macarrão"];
lista[0] = "café"
alert(lista)
lista.length //para saber o tamanho da lista

alert(lista[lista.length - 1]); //iria me mostrar o ultimo item da lista

lista.push("leite") // adiciona um elemento na ultima posição da lista

lista.unshift("manga") // vai adicionar manga no primeiro indice da lista

lista.splice(1,0, "Maçã", "abacate") //1 seria a quantidade de itens a serem adicionados, 0 seria quantos itens da lista seriam excluidos para que adionassem esses novos

*/
/*
SLICE FAZ O FATIAMENTO DE UMA ARRAY

const lista = ["arroz", "feijão", "macarrão","carne","salada"];
const segunda_lista = lista.slice(1,2)//tem que passar a posição que ele irá fatiar

//.sort mostra a lista em ordem alfabetica, não serve com números
const lista_ordem = segunda_lista.sort()

//ordem invertida
//segunda_lista.sort
//segunda_lista.reverse


document.getElementById("teste").innerHTML = segunda_lista
*/

/*
ORDENANDO UMA LISTA DE NÚMEROS

const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(function(a,b){return a - b});// se colocar b-a, entao ele vai ordenar do ultimo para o primeiro

document.getElementById("teste").innerHTML = numeros;
*/

/*
PEGANDO O MAIOR E O MENOR NÚMERO DA LISTA

const numeros = [40, 100, 1, 5, 25, 10];
function maiorNumero(array){
    return Math.max.apply(null,array)//pegando o maior número da lista
}
document.getElementById("teste").innerHTML = maiorNumero(numeros);

function menorNumero(array){
    return Math.min.apply(null,array)
}

document.getElementById("teste2").innerHTML = menorNumero(numeros)

*/

/*
FILTRAGEM DE NUMEROS


const numeros = [40, 100, 1, 5, 25, 10];
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
}

document.getElementById("teste").innerHTML = maior20
*/