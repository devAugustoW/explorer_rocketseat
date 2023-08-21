// Function Anonymous 

const sum = function(number1, number2){  // Parâmetros da função
    console.log(number1 + number2);
}
sum(2,3);  // Argumentos
sum(4,5);
sum(2, 2.5486);


const soma = function(num1, num2){
    var total = num1 + num2;
    return total;
}

let num1 = 20;
let num2 = 30;
console.log(`O número 1 é ${num1}`);
console.log(`O número 2 é ${num2}`);
soma(`a soma é ${sum(num1, num2)}`);


// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'suco de '+ fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maçã');

console.log(copo);