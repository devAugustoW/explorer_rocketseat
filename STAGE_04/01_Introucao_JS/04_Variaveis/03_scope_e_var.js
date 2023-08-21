/*
    * Scope
        - Determina a visibilidade de alguma variável no js

    * Block statement
        ```js
        // Vamos inciar um blocl
        {
            // Aqui dentro é um bloco
        }
        ```
        - O bloco cria um novo escopo

*/

// var é global e também local

console.log('existe x antes do bloco?', x)

{
    var x = 0
}

console.log('Existe x antes do bloco?', x)
