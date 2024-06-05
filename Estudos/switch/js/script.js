/* SWITCH

É usado  para realizar diferentes ações com base em diferentes condições no mesmo
bloco de verificação. Caso a condição nao seja compativel não será executada
é o valor padrão será acionado

*/

/* FUNÇÃO VERIFICADORA DE COR

function verificaCor(){
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();//deixando a entrada do dado em letras minusculas

    switch (cor){
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break
        case "amarelo":
            document.body.style.backgroundColor = "yellow"
            break
        default:
            document.getElementById("teste").innerHTML = "Está cor não está disponivel "
    }
}
*/

function diaSemana(){
    var dia = new Date().getDay();

    switch(dia){
        case 0:
            document.getElementById("teste").innerHTML = "Domingo"
            break
        case 1:
            document.getElementById("teste").innerHTML = "Segunda"
            break
        case 2:
            document.getElementById("teste").innerHTML = "Terça"
            break
        case 3:
            document.getElementById("teste").innerHTML = "Quarta"
            break
        case 4:
            document.getElementById("teste").innerHTML = "Quinta"
            break
        case 5:
            document.getElementById("teste").innerHTML = "Sexta"
            break
        case 6:
            document.getElementById("teste").innerHTML = "Sábado"
            break
        default:
            document.getElementById("teste").innerHTML = "Não sei que dia e hoje"

    }
}