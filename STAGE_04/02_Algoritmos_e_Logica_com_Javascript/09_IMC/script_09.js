// Calculando IMC dos pacientes com Funções
/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC = peso / (altura * altura)
*/

// Array de objetos
let lista_de_pacientes = [
    {
        name:'Fellipe',
        age: 38,
        weight: 84,
        height: 1.80,
    },

    {
        name: 'Augusto',
        age: 38,
        weight: 82,
        height: 1.80,
    },

    {
        name: 'Rafaela',
        age:40,
        weight: 59,
        height: 1.6,
    }
]

/*
// 1o exemplo 
function calcularIMC() {
    alert(`
        Paciente ${lista_de_pacientes[0].name} possui IMC de ${(lista_de_pacientes[0].weight / (lista_de_pacientes[0].height ** 2)).toFixed(2)}
    `)
}
calcularIMC()
*/


/*
function calcularIMC(){
    for (let i=0; i< lista_de_pacientes.length; i++){
        alert(`Paciente ${lista_de_pacientes[i].name} tem IMC de ${lista_de_pacientes[i].weight/(lista_de_pacientes[i].height**2)}`)
    }
}

calcularIMC()
*/


//Fazer função que apresente como resultado o IMC do paciente escolhido!!


function calcularIMC(objeto) {
    return `Paciente ${objeto.name} tem IMC de ${(objeto.weight/(objeto.height**2)).toFixed(2)}`
}

alert(calcularIMC(lista_de_pacientes[2]))

let result = calcularIMC(lista_de_pacientes[2])
alert(result)


for (pacientes of lista_de_pacientes) {
    let imc = calcularIMC(pacientes)
    alert(`Cálculo novo: ${imc}`)
}