/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo
espeficicados.Esses intervalos de tempo são chamados de eventos de 
cronometragem.

Os dois métodos-chave para usar com JavaScript são:

SetTimeOut(function, tempo em milisegundos)
--> Executa uma função, depois de esperar um número especificado de milisegundos.

SetInterval(function, milliseconds)
--> É o mesmo que o SetTimeOut(). Mas repete a execução da função continuamente.

*/

/*
function ativarContagem(){
    document.getElementById("tempo").innerHTML = "começou a contar";
    tempo = setTimeout(function(){
        //EXECUTA A FUNÇÃO APENAS UMA VEZ, APÓS O TEMPO
        document.getElementById("tempo").innerHTML = "Executou o setTimeOut";
        document.body.style.backgroundColor = "red";
    }, 7000);
}

*/

/*
//para parar uma contagem tem que passar --> tempo = setTimeout(function(){}
function pararContagem(){
    clearTimeout(tempo);
    document.getElementById("tempo").innerHTML = "Parou a contagem"
}
*/

/*SetInterval

function ativarContagem(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById("tempo").innerHTML = soma;

    }, 1000);


}

function pararContagem(){
    clearInterval(tempo);
}
*/

function ativarContagem(){
    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) - 1;

        if(soma === 0){
            document.getElementById("tempo").innerHTML = "Tempo esgotado";
            pararContagem();
        }else{
            document.getElementById("tempo").innerHTML = soma;
        }


        document.getElementById("tempo").innerHTML = soma;
    }, 1000)
}

function pararContagem(){
    clearInterval(tempo);
}