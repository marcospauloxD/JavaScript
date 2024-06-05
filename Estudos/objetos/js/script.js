/*OBJETOS
São basicamente variaveis que vario valores dentro

EX: const carro = {marca: "ford", modelo:"ka", ano: 2015}

Os valores dentro de um objeto são chamados propriedades.

Objetos tambem podem ter métodos. Um método é uma função colocada
dentro de uma propriedade.

*/

const carro = {
    marca: "ford", 
    modelo: "ka", 
    ano: 2015,
    placa: "ABC-1234",

    //metodo, é quando cria um propriedade com uma função dentro
    buzina: function(){
        alert('Biiiiiiiiiii')},
    
    completo: function(){
        return "A marca é: "+this.marca+"é o modelo é: "+this.modelo;
    }
};

//alert(carro.ano);
//alert(carro["marca"]);

//CHAMANDO A FUNÇÃO BUZINA
//carro.buzina();

alert(carro.completo)