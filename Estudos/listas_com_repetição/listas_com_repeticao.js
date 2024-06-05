let frutas = ["uva","laranja","banana"]

/*Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for'*/
for(let i = 0; i < frutas.length; i++){
    console.log('Nome da fruta contida no Array: ' + frutas[i]);
}

/*Imprimindo na caixa de dialogo o conteúdo do array 'frutas' utilizando   */
for(let fruta in frutas){
    console.log('Nome da fruta contida no array: '+ frutas[fruta]);
}