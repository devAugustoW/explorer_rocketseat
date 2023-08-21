export const AlertError = {
    screenError: document.querySelector('.screen-error'),

    appear(){
        AlertError.screenError.classList.add('appear')
    },

    dissapear() {
        AlertError.screenError.classList.remove('appear')
    }
}