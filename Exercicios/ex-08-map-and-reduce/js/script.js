const numbers = [65, 44, 12, 4];

//para cada x ele multiplica o numero por 5, 65*5, 44*5
const newArr = numbers.map((x)=>x*5);

/*reduce soma os pares 65+44 e forma um novo numero que será somado com outro par */

const soma = numbers.reduce((x,y)=>x+y);

document.getElementById("demo1").innerHTML = newArr;
document.getElementById("demo2").innerHTML = soma;
