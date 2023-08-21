// callback function
// Uma callback function é uma função que está sendo passada para outra função como parâmetro.

function sayMyName(name) {
    console.log('Antes de executar a função Callback');

    name();

    console.log('Depois de executar a Callback')
}

sayMyName (
    () => {
        console.log('estou em uma callback');
    }
)
