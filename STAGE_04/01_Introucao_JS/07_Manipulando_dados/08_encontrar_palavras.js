// Manipulando Strings

// Verificar se o texto contem uma determinada palavra

// includes() -> procura o argumento desejado. É case sensitive!!

//Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

let phrase = 'A inteligência artificial está revolucionando diversas indústrias.'
console.log(phrase.includes('diversas'))
console.log(phrase.includes('Diversas'))

console.log(phrase.includes('boris'))