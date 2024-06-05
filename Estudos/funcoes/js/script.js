
//FUNÇÃO DE SOMA
/*var a, b;
a = 30
b = 15

function soma(a,b){
    return a + b
}

document.getElementById("resultado").innerHTML = soma(a,b);
*/


//FUNÇÃO DE COTAÇÃO DE DOLAR
/*function realParaDolar(real,cotacaoDolar){
    return real * cotacaoDolar
}

var valorReal = 7.09;
var cotacao = 5.8;

var total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " + valorReal + " " + "Valor em dolar U$:" + total);
*/

//FUNÇÃO SEMPRE QUE CLICAR DISPARA UM ALERTA
/*function alertaHello(){
    alert("Olá pessoal");
}

chamando a função alertaHello
alertaHello();
*/

function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);

alert("A temperatura é de: " + x + " graus celsius")