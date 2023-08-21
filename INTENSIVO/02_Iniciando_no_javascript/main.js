// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World')


// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num01 = Number(prompt('Digite um número inteiro.'))
let num02 = Number(prompt('Digite outro número inteiro.'))

alert(`${num01} + ${num02} = ${num01 + num02}`)


// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let isNum = prompt('Digite qualquer coisa.')

if (typeof isNum === 'number') {
    alert('É um número.')
} else {
    alert('Não é um número.')
}


// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString = prompt('Digite qualquer coisa')


if (typeof isString === 'string') {
    alert('É uma string.')
} else {
    alert('Não é uma string.')
}



// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBolean = false

if (typeof isBolean === 'boolean') {
    alert('É um booleano')
} else {
    alert('Não é um booleano')
}



// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let num03 = Number(prompt('Digite um valor.'))
let num04 = Number(prompt('Digite outro valor'))

alert(`${num03} - ${num04} = ${num03 - num04}`)



// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let num05 = Number(prompt('Digite um valor.'))
let num06 = Number(prompt('Digite outro valor'))

alert(`${num05} * ${num06} = ${num05 * num06}`)



// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let num07 = Number(prompt('Digite um valor.'))
let num08 = Number(prompt('Digite outro valor'))

alert(`${num07} / ${num08} = ${num07 / num08}`)



// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let num09 = Number(prompt('Digite um valor'))

if (num09 % 2 == 0) {
    alert('Número par!')
} else {
    alert('Não é número par!')
}



// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let num10 = Number(prompt('Digite um valor'))

if (num10 % 2 == 0) {
    alert('Não é Número ímpar!')
} else {
    alert('É número ímpar!')
}