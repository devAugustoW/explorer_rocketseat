
// Manipulando Números e Strings

// Arredondar Número quebrado para duas casas decimais e trocar '.' por ','

// toFixed -> arredonda     /     replace -> troca o dado por outro desejado 

let number = 345.33452345
console.log(`Numero -> ${number}`)
console.log(`Número com toFixed -> ${number.toFixed(2)}`)
console.log(`Número com toFixed e replace -> ${number.toFixed(2).replace(".", ",")}`)
