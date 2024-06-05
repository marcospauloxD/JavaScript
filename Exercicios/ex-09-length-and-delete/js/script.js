let alunos = ["Pedro", "Roberto", "Claudio"]
//deleta um indice da lista que você passou
delete alunos[0]

/*remove um elemento do final do array, atualizando seu tamanho*/
alunos.pop();

/*este método remove um elemento do início do array. Após a remoção, este é reindexado (ou seja, o elemento de índice 1 passa a ser o de índice 0 e assim sucessivamente). Além disso, o tamanho do array também é atualizado*/
alunos.shift();

//acrescenta na primeira posiçãoqq
alunos.unshift();


//length retorna o tamanho da lista
document.getElementById("demo1").innerHTML = alunos.length

document.getElementById("demo2").innerHTML = alunos
