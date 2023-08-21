export function toggleScreens(screen1, screen2) {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

export function updateTentativasText(element, tentativas) {
    const text = tentativas === 1 ? `Você acertou em ${tentativas} tentativa!` : `Você acertou em ${tentativas} tentativas!`;
    element.innerText = text;
}