const a = [12,54,23];
const b = [99,30,45];
//aqui esta juntando as duas listas
let c = a.concat(b);

//esta ordenando a lista
c.sort();

//inverte a ordem para deixar decrescente
c.reverse();

/*Criando um filtro  que estão entre 20 e 90*/
c = c.filter((x)=> (x>20 && x<90));

/*join expressa os valores separados por um simbolo qualquer */
document.getElementById("demo1").innerHTML = c.join("-")