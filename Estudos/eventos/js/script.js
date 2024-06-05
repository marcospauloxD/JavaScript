/**
 * onclick = Disparado quando recebe um click
 * ondblclick = Disparado quando clique duplo
 * onmouseover = Disparado quando o mouse está sobre
 * onmouseout = Disparado quando o mouse é movido para fora do elemento
 * onmousemove = Disparado quando o mouse é movido no elemento
 * onmousedown = Disparado quando o clique do botão foi pressionado
 * onmouseup = Disparado quando o clique do botão é liberado
 * onfocus = Disparado quando o elemento recebe o foco, valido para input
 * onchange = Disparado quando existe uma mudança no conteudo."Ao mudar"
 * onblur = Disparado quando o elemento perde o foco
 * onkeydown = Disparado quando uma tecla é precionada
 * onkeypress = Disparado quando uma tecla é pressionada e soltada
 * onkeyup = Disparado quando uma tecla e solta sobre um elemento
 * onload = Disparado quando a pagina terminou de ser carregada. Body
 * onsize = Disparado quando há um redimencionamento da janela
 * 
 */



function clique(){
    //alert("Disparou um clique")
    document.body.style.backgroundColor = "yellow";
}

function cliqueDuplo(){
    alert("Dois cliques");
}

function mouseEmCima(){
    alert("Olá");
}

function mouseFora(){
    alert("Tchau");
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red"

}

function viraBranco(){
    let div2 = document.getElementById("teste");
    div2.style.backgroundColor = "blue"
}

/*function teclaPressionada(){
   let input = document.getElementById("campoTexto").value;
   console.log(input);

}
*/

function onKeyDown(){
    let input = document.getElementById("campoTexto").value
    console.log(input);
}