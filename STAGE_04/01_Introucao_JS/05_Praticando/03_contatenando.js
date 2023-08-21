// declaração or declaration
var nome;

// assignment or atribuição de valores
nome = 'Fellipe';

// que tipo de valor foi colocado na variável?
console.log(typeof nome);

//agrupamento de declarações
let age, isHuman

age = 18;
isHuman = true;

// Multiplos argumentos na função
console.log(nome, age, isHuman)


// Escrita de texto + variáveis
console.log('O '+ nome+ ' tem '+ age+ ' anos');


// Interpolando valores com template literais
console.log(`O ${nome} tem ${age} anos`);