
// Operações matemáticas

/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/

let num_01 = Number(prompt('Digite um número'))
let num_02 = Number(prompt('Digite um número'))

const sum = num_01 + num_02
const sub = num_01 - num_02
const multi = num_01 * num_02
const div = num_01 / num_02
const rest = num_01 % num_02

alert('Soma '+ sum)
alert('Subtração '+ sub)
alert('Multiplicação '+ multi)
alert('Divisão '+ div)
alert('Resto '+ rest)

