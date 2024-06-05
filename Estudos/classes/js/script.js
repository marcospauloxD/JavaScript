class Fabrica {
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;

    }
    buzina(){
        return this.modelo + " buzinou: biiiiiiii"
    }
}


const uno = new Fabrica("Fiat","Uno", 2001);
const gol = new Fabrica("Volkswagen","Gol", 2013);
console.log(uno);
console.log(gol.marca);
console.log(gol.buzina())
gol.ano = 2014
console.log(gol)