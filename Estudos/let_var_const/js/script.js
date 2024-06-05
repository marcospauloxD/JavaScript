/* Vamos entender Variáveis
Variáveis são "recipientes" onde podemos armazenar
informações que podem variar, ou sejá, podem ter qualquer
tipo de valor.

No JavaScript temos 3 palavras-chaves para declarar variaveis:

-> var
-> let
-> const

*/
var nome,sobrenome,nomeCompleto;



var nome = "Dimitri";
var sobrenome = "Teixeira";
var nomeCompleto = nome + " " + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto