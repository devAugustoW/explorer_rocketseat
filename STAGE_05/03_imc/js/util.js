import { Modal } from './modal.js'

export const inputWeight = document.querySelector('#input-weight')
export const inputHeight = document.querySelector('#input-height')
export const btnCalcular = document.querySelector('#btnCalcular')

export function IMC(weight, height){
    return (weight/(height**2)).toFixed(2)
}

export function displayResult(result) {
    let message = 'O seu IMC é '+ result
    Modal.message.innerHTML = message
    Modal.hideOff()
}

export function erase() {
    inputWeight.value= ''
    inputHeight.value = ''
}

export function calcularIMC() {
    let weight = inputWeight.value
    let height = inputHeight.value

    if (isNaN(weight) || isNaN(height) || weight == '' || height == ''){
        AlertError.appear()
        inputWeight.value = ''
        inputHeight.value= ''

    } else {
        let result = IMC(weight, height)
        displayResult(result)
        erase()

    }
}

export function setupEnterKeyHandler() {
    inputHeight.addEventListener('keydown', event => {
        if (event.key === 'Enter' && Modal.container.classList.contains('hide')) {
            calcularIMC();
        }
    });
}

