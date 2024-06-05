var numero1 = prompt("Insira o primeiro número: ");
var numero2 = prompt("Insira o Segundo numero: ");

var resultadodivisao = divida(numero1, numero2);

alert('O resultado da divisão é igual a: ' + resultadodivisao);
alert('Obrigado!!!');

 
function divida(numero1, numero2){
    var resultado = 0;

    resultado = numero1 / numero2;
    return resultado;
}