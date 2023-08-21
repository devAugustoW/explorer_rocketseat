/*
    Prototypes -> Herança de propriedades e métodos entre objetos.

    * prototypes-based language
    * prototype chain
    * __proto__
    
*/

// O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.


function Pessoa(nome) {
    this.nome = nome;
}

// Adicionando um método ao protótipo da função Pessoa
Pessoa.prototype.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome}.`);
}

const pessoa1 = new Pessoa("Alice");
const pessoa2 = new Pessoa("Bob");

pessoa1.apresentar() // Saída: "Olá, meu nome é Alice."
pessoa2.apresentar() // Saída: "Olá, meu nome é Bob."