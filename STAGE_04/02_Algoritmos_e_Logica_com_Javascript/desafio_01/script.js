/*
    Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

    - [x]  A soma dos dois números;
    - [x]  A subtração dos dois números;
    - [x]  A multiplicação dos dois números;
    - [x]  A divisão dos dois números;
    - [x]  O resto da divisão dos dois números;

    - [x]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
    - [x]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/


let num01 = Number(prompt('Insira o 1o número'))
let num02 = Number(prompt('Insira o 2o número'))

alert(`SOMA: ${num01} + ${num02} = ${num01 + num02}`)
alert(`SUBTRAÇÃO: ${num01} - ${num02} = ${num01 - num02}`)
alert(`MULTIPLICAÇÃO: ${num01} * ${num02} = ${num01 * num02}`)
alert(`DIVISÃO: ${num01} / ${num02} = ${num01 / num02}`)
alert(`RESTO: ${num01} % ${num02} = ${num01 % num02}`)

if ((num01 + num02) % 2 == 0) {
    alert('A soma dos numeros é par')
} else {
    alert('A soma dos números é ímpar')
}

if (num01 == num02) {
    alert(`Os números inseridos são iguais`)
} else {
    alert(`Os números inseridos são diferentes`)
}
