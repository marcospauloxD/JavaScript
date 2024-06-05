let frutas = ['Uva','Manga'];

/* adicionando elementos a uma lista(array)

frutas.push('Maçã')
frutas.push('Pera')

*/

//outra forma de adicionar
//frutas[frutas.length] = 'Maçã';


/*O splice é um método multiuso em JavaScript. Ele serve tanto para excluir elementos de um array, como veremos a seguir, como para substituir e inserir

(3,0, 'Pera');
esse 3 antes do 0, e a posição onde o elemento será inserido
0 = adiciona, e nao remove nenhum elemento
1 = exclui e substitiu
*/
frutas.splice(3,0, 'Pera');
frutas.splice(1,1,'Helena');

//para sber o tamanho da lista
frutas.length

for(let fruta in frutas){
    alert(frutas[fruta])
}



