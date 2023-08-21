/*
    FALSY
    quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN

    // O JS converte todos os valores acima como false
*/
console.log( 0 ? 'verdadeiro' : 'false' )
console.log( -0 ? 'verdadeiro' : 'false' )
console.log( NaN ? 'verdadeiro' : 'false' )

/*
    TRUTHY
    Quando um valor é considerado True em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    8.74
    "0"
    'false'
    -1
    Infinity
    -Infinity

    // O JS converte os valores acima para true
*/
console.log( -1 ? 'verdadeiro' : 'false' )
console.log( 'false' ? 'verdadeiro' : 'false' )
console.log( -1 ? 'verdadeiro' : 'false' )