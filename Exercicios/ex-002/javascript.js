var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");

resultadodivisao = divisao(numero1, numero2);

alert('O resultado da divisão é: ' + resultadodivisao);

function divisao(numero1, numero2){
    resultado = 0;
    resultado = numero1 / numero2
    return resultado
}