
// Estruturando dados com Objetos

/* 
 a)  Crie uma lista de pacientes

    Cada paciente dentro da lista, deverá conter
      nome
      idade
      peso
      altura

  b) Escreva uma lista contendo o nome dos pacientes, idades, alturas e pesos
*/

/*
Objeto => const lista_de_pacientes = [
    {
        nome: "luiz", 
        idade: 38, 
        peso: 80, 
        altura: 180,
    },

    {
        nome: "Augusto",
        idade: 38,
        peso: 80,
        altura: 180,
    },

    {},
]
Pegar o nome dos pacientes

lista_nomes = []

for (let i = 0; i < lista.length; i++){
    lista_nomes[i] = lista_de_pacientes[i].nome
}

alert(lista_nomes)
*/


let lista_de_pacientes = [
    {
        name:'Fellipe',
        age: 38,
        weight: 82,
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
let lista_de_nomes = []

for (let i=0; i<lista_de_pacientes.length; i++) {
    lista_de_nomes[i] = lista_de_pacientes[i].name
}
alert(lista_de_nomes)


let lista_de_idades = []

for (let j = 0; lista_de_pacientes.length; j++) {
    lista_de_idades[j] = lista_de_pacientes[j].age
}
alert(lista_de_idades)
*/


/*
for (let i=0; i<lista_de_pacientes.length; i++){
    alert(`Paciente ${lista_de_pacientes[i].name} tem ${lista_de_pacientes[i].age} anos, pesa ${lista_de_pacientes[i].weight} quilos e tem altura ${lista_de_pacientes[i].height}.`)
}
*/


/*
let lista_de_nomes = []

for (let i of lista_de_pacientes) {
    lista_de_nomes.push(i.name)
}
alert(lista_de_nomes)

alert(`Paciente ${lista_de_pacientes[2].name} tem ${lista_de_pacientes[2].age} anos, ${lista_de_pacientes[2].height} m de altura e está pesando ${lista_de_pacientes[2].weight} kg .`)

alert(`Paciente ${lista_de_pacientes[2].name} tem ${lista_de_pacientes[2].age} anos, ${lista_de_pacientes[2].height} m de altura e está pesando ${lista_de_pacientes[2].weight} kg .`)
*/

for (let i=0; i<lista_de_pacientes.length; i++){
    alert(`Paciente ${lista_de_pacientes[i].name} tem ${lista_de_pacientes[i].age} anos, pesa ${lista_de_pacientes[i].weight} quilos e tem altura ${lista_de_pacientes[i].height}.`)
}

