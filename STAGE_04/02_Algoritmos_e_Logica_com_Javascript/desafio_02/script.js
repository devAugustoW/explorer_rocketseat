/*
    Criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

    - nome;
    - nota da primeira prova;
    - nota da segunda prova.

    Depois de criada a lista:

    - [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
    - [x]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const lista_de_alunos = [
    {
        name: 'Augusto',
        nota_01: 10,
        nota_02: 9.5,
    },

    {
        name: 'Boris',
        nota_01: 8.5,
        nota_02: 9,
    },

    {
        name: 'Afonso',
        nota_01: 7,
        nota_02: 5,
    },

    {
        name: 'João',
        nota_01: 8,
        nota_02: 8.5,
    }
] 

// alert(`Aluno ${lista_de_alunos[0].name} recebeu média ${(lista_de_alunos[0].nota_01 + lista_de_alunos[0].nota_02) / 2}`)


/*
function calcularMedia() {
    for (let i=0; i<lista_de_alunos.length; i++) {
        alert(`Aluno ${lista_de_alunos[i].name} recebeu média ${(lista_de_alunos[i].nota_01 + lista_de_alunos[i].nota_02) / 2}`)
    }
}

calcularMedia()
*/


function calcularMedia(objeto) {
    let media = (objeto.nota_01 + objeto.nota_02) / 2
    alert(`Aluno ${objeto.name} recebeu média ${media}`) 

    if (media >= 7){
        alert(`Parabéns ${objeto.name} você foi aprovado!`)
    } else {
        alert(`Não foi desta vez ${objeto.name}, você não foi aprovado.`)
    }
}

// calcularMedia(lista_de_alunos[2])

/*
for (let j=0; j<lista_de_alunos.length; j++) {
    calcularMedia(lista_de_alunos[j])
   
}
*/

for (aluno of lista_de_alunos) {
    calcularMedia(aluno)
}

