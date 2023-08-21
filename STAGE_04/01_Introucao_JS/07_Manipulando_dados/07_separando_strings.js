// Manipulando Strings e Arryas

// Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

// Separe um texto que contém espaços em um novo array, onde cada palavra é uma posição do array.
let phrase = 'A tecnologia é uma coisa sensacional'
console.log(phrase)

// split transforma uma string em array e separa e preenche os espaços com cada palavra 
let split = phrase.split(' ')
console.log(split)


let join = split.join('');
console.log(join)

// Transforme o array em texto e onde eram espaços coloque _
let phraseWithUnderScore = split.join('_')

console.log(phraseWithUnderScore)

