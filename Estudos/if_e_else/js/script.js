//var hora = new Date().getHours //pegando a hora do pc

function verificar(){
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome == null){
        //document.getElementById("teste").innerHTML = "O campo não pode ficar vazio"

        let p = document.getElementById("teste");
        p.innerHTML = "O campo não pode ficar vazio"; //forma mais simples
        p.style.color = "red";
    }else{
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns tudo certinho";
        p.style.color = "green";
    }

}