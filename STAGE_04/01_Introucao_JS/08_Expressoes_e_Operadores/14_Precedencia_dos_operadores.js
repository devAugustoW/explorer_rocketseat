/*
    Operator Precedence

    * grouping                        ( )
    * negação e incremento            ! ++ --
    * multiplicação e divisão         * /
    * adição e subtração              + -
    * relacional                      < <= > >=
    * igualdade                       == !== === !===
    * AND                             &&
    * OR                              ||
    * condicional                     ?:
    * assignment (atribuição)         = += -= *=
*/
// Ao realizar o 3 > 2, o dado vira "true" e "true > 1" perde o sentido, por isso é false
console.log(3 > 2 > 1) 
console.log(3 > 2 && 2 > 1)