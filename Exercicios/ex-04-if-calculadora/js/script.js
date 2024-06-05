
let numero1 = prompt('Primeiro número: ')
var operacao = prompt('Informe a operação: ')
var numero2 = prompt('Segundo número: ')
//&& = and //
// || = or //


if(operacao == '+'){
    num1 = parseInt(numero1)
    num2 = parseInt(numero2)
    resultado = num1 + num2
    alert('Resultado: '+ resultado)
}else if(operacao == '-'){
    alert('subtração')
}else if(operacao == '*'){
    alert('multiplicação')
}else if(operacao == '/'){
    alert('divisao')
}else{
    alert('Operação não definida');
}