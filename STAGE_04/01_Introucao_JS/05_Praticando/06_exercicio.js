// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dados é a variável acima?
console.log(typeof weight)


/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

let name = 'String';
let age = 38;
let star = 38.5;
let isSubscribed = true;



// 4. A variável student abaixo é de que tipo de dados?

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

/*
    4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/
let student = {}
console.log(typeof student);

student = {
    name: 'Fellipe',
    age: 38,
    weight: 80,
    isSubscribed: true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)



/*
    5. Declare uma variavel do tipo array, de nome started e atribua ela um valor, ou seja, somente o Array vazio.
*/
let started = {}



/*
    6. Reatribua valor para a variável acima, colocando dentro dela o obejto student da questão 4. 
*/

students = [
    student
]
console.log(students)


/*
    7. Coloque no console o valor na posição zero do Array acima
*/
console.log(students[0]);


/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/
let john = {
    name: "John",
    age: 23,
    weight: 74.8,
    isSbscribed: true,
}

students = [
    student,
    john,
]

students[1] = john


/*
    9. Sem rodar o código responda qual é resposta do código abaixo e por que? Após sua rresposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

console.log(a)
var a = 1