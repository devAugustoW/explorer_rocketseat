/*
    Função construtora -> Funcção especial para criar objetos que utiliza a palavra NEW seguido do nome da função.

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Pessoa (nome) {
    this.nome = nome;
    this.andar = function() {
        return this.nome+ ' está andando'
    }
}

const pessoa1 = new Pessoa('Mayky')
const pessoa2 = new Pessoa('João')
console.log(pessoa1.andar())
console.log(pessoa2.andar())