import { erase } from './util.js'

export const Modal = {
    container: document.querySelector('.modal-container'),
    message: document.querySelector('#modalMessage'),
    btnClose: document.querySelector('#modalBtnClose'),

    hideOn(){
        this.container.classList.add('hide')
    }, 

    hideOff(){
        this.container.classList.remove('hide')
    }
}


Modal.btnClose.addEventListener('click', function() {
    Modal.hideOn()
    erase()
})

