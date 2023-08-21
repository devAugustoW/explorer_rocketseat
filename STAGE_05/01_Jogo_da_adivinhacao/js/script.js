import { generatesRandomNunber, checkGuess, resetGame, randomNumber, tentativas } from './gameModule.js';
import { toggleScreens, updateTentativasText } from './domModule.js';

const inputElement = document.querySelector('#inputNumber');
const btnTry = document.querySelector('#btnTry');
const btnTryAgain = document.querySelector('#btnTryAgain');
const screen_1 = document.querySelector('.screen-1');
const screen_2 = document.querySelector('.screen-2');
const tentativasElement = document.querySelector('.screen-2 h2');

generatesRandomNunber();

inputElement.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        if (screen_1.classList.contains('hide')) {
            btnTryAgain.click();
        } else {
            btnTry.click();
        }
    }
});

btnTry.addEventListener('click', () => {
    const inputValue = inputElement.value;
    const isCorrectGuess = checkGuess(inputValue);

    if (isCorrectGuess) {
        toggleScreens(screen_1, screen_2);
        updateTentativasText(tentativasElement, tentativas);
        resetGame();

    } else {
        alert('Errou, tente novamente!');

    }

    inputElement.value = '';
});

btnTryAgain.addEventListener('click', () => {
    toggleScreens(screen_1, screen_2);
    resetGame();
    inputElement.value = '';
});