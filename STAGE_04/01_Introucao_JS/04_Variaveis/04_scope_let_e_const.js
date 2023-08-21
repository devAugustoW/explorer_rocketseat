// const e let são locais e só funcionam no escopo onde foram criadas

/*
console.log('existe y antes do bloco?', y)

{
    let y = 0
}

*/

/*
{
    let y = 0
}
console.log('existe y antes do bloco?', y)
*/

{
    let y = 0
    console.log('existe y antes do bloco?', y)
}
