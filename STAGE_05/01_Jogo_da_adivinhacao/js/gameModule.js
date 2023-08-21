export let randomNumber = 0;
export let tentativas = 0;

export function generatesRandomNunber() {
    randomNumber = Math.floor(Math.random() * 10);
    console.log(`randomNumber: ${randomNumber}`);
}

export function checkGuess(inputValue) {
    tentativas++;

    if (randomNumber == inputValue) {
        return true;
    }

    return false;
}

export function resetGame() {
    generatesRandomNunber();
    tentativas = 0;
}