// Switch

// Tem um papel muito similar ao if e ao else if, porém a estrutura é bem diferente

function calculate (number1, operator, number2) {
    let result

    switch(operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
    }
    return result
}

console.log(calculate(2, '*', 3))

console.log(calculate(4, '%', 8))