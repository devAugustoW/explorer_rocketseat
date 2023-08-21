// Manipulando Strings e Números

//Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

// Contar quantos caracteres tem um palavra e quantos dígitos tem um número

let word = 'Paralelepípedo'
console.log(word.length)

let number = 1234
console.log(String(number).length);

// Variáveis do tipo Number não recebem o lenght. Por isso a conversão de Number para String