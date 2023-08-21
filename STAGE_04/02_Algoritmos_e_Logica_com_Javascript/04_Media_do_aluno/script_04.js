
// Calculando a média de um estudante

/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

const nome = prompt('Digite o nome do aluno')
const nota_1 = Number(prompt('Digite a primeira nota'))
const nota_2 = Number(prompt('Digite a segunda nota'))
const nota_3 = Number(prompt('Digite a terceira nota')) 

const media = (nota_1 + nota_2 + nota_3) / 3

let result = media > 6
if (result) {
    alert('Congratulations, you win!')
} else {
    alert('Oh my god, Game Over. Try again!')
}
