// Manipualndo Arrays
/*
    .unshift(), adiciona um elemento no começo do array

    .push(), adiciona um elemento no final do array

    .shift(), retira um elemento do começo do array

    .pop(), retira um elemento do final do array

    .slice(), recebe como argumentos as posições de início e fim da parte que você quer do Array e retorna os valores destas posições

    .splice(), retira os elementos desejados do array pela posição

    .indexOff(), encontra o index do valor que recebe como argumento em um 
*/

let techs = ['html', 'css', 'js']

// adicionar um item no fim
console.log(techs.push('nodejs'))


// adicionar no começo
techs.unshift('sql')

// remover um item no fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elemntos do array
console.log(techs.slice(1, 3))
console.log(techs.slice(1, 2))
console.log(techs.slice(1,1))

/// remover 1 ou mais itens em qualquer p=osição do array
techs.splice(1, 2)
console.log(techs)
// encontrar a posição de um elemento do array
let explorer = ['react', 'nodejs', 'vue']
let index = explorer.indexOf('vue')
console.log(index);
explorer.splice(2)
console.log(explorer);


console.log("10" + 5)
console.log(Number('10') + 5)