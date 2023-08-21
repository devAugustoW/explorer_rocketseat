import { inputWeight, inputHeight, btnCalcular, calcularIMC, setupEnterKeyHandler,  } from './util.js'
import { AlertError } from './alert-error.js'


btnCalcular.addEventListener('click' , calcularIMC)
setupEnterKeyHandler()

// Evento que faz o screen error sumir somente com digitação no INPUT
inputWeight.oninput = () => AlertError.dissapear()
inputHeight.oninput = () => AlertError.dissapear()