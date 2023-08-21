import { audioForest, audioRain, audioShop, audioFire } from "./sounds.js"

const btnForest = document.querySelector('#btnForest')
const btnRain = document.querySelector('#btnRain')
const btnShop = document.querySelector('#btnShop')
const btnFire = document.querySelector('#btnFire')

const checkbox1 = document.querySelector('#checkbox1');
const checkbox2 = document.querySelector('#checkbox2');
const checkbox3 = document.querySelector('#checkbox3');
const checkbox4 = document.querySelector('#checkbox4');

const btnplay = document.querySelector('#btnPlay')
const btnStop = document.querySelector('#btnStop')
const btnIncrease = document.querySelector('#btnIncrease')
const btnDecrease = document.querySelector('#btnDecrease')

const minutesHTML = document.querySelector('#minutes')
const secondsHTML = document.querySelector('#seconds')

let minutes = Number(minutesHTML.textContent)
let seconds = Number(secondsHTML.textContent)

let intervalID   
let clickCount = 0
let isActived = false


function showDisplay() {
    secondsHTML.textContent = String(seconds).padStart(2, '0')
    minutesHTML.textContent = String(minutes).padStart(2, '0')
}

function countDown() {
    intervalID = setInterval(() => {
        if(minutes == 0 && seconds == 0) {
            clearInterval(intervalID)
            audioForest.play()
            return
        }

        if (seconds == 0) {
            seconds = 59
            minutes--
        } else {
            seconds--
        }
        
        showDisplay()

    }, 1000);
}

function resetDisplay(){
    minutes = 25
    seconds = 0

    minutesHTML.textContent = String(minutes).padStart(2, '0')
    secondsHTML.textContent = String(seconds).padStart(2, '0')
}


btnplay.addEventListener('click', () => {
    clickCount = 0

    // check if countDown is runnig already
    if (!isActived) {
        countDown()
        isActived = true
    } else {
        return
    }    

})

btnStop.addEventListener('click', () => {
    clickCount++ 
    isActived = false
    
    // Reset display with a second click
    if (clickCount % 2 == 0 && clickCount != 0) {
        resetDisplay()
    }

    clearInterval(intervalID)
})

btnIncrease.addEventListener('click', () => {
   minutes += 5
   minutesHTML.textContent = String(minutes).padStart(2, '0')
   secondsHTML.textContent = String(seconds).padStart(2, '0')
})

btnDecrease.addEventListener('click', () => {
    if (minutes <= 5){
        minutes = 0
        minutesHTML.textContent = String(minutes).padStart(2, '0')
    } else {
        minutes -= 5
        minutesHTML.textContent = String(minutes).padStart(2, '0')
    }
})


checkbox1.addEventListener('click', () => {
    if (checkbox1.checked) {
        // Checkbox is checked
        checkbox2.checked = false
        checkbox3.checked = false
        checkbox4.checked = false

        btnForest.classList.add('cardSelected')
        btnRain.classList.remove('cardSelected')
        btnShop.classList.remove('cardSelected')
        btnFire.classList.remove('cardSelected')

        audioForest.play()
        audioRain.pause()
        audioShop.pause()
        audioFire.pause()

    } else { 
        // Checkbox is not checked
        btnForest.classList.remove('cardSelected')
        audioForest.pause()
    }
});

checkbox2.addEventListener('click', () => {
    if (checkbox2.checked) {
        // Checkbox is checked
        checkbox1.checked = false
        checkbox3.checked = false
        checkbox4.checked = false

        btnRain.classList.add('cardSelected')
        btnForest.classList.remove('cardSelected')
        btnShop.classList.remove('cardSelected')
        btnFire.classList.remove('cardSelected')

        audioRain.play()
        audioForest.pause()
        audioShop.pause()
        audioFire.pause()

    } else {
        // Checkbox is not checked
        btnRain.classList.remove('cardSelected')
        audioRain.pause()
    }
});

checkbox3.addEventListener('click', () => {
    if (checkbox3.checked) {
        // Checkbox is checked
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox4.checked = false

        btnShop.classList.add('cardSelected')
        btnForest.classList.remove('cardSelected')
        btnRain.classList.remove('cardSelected')
        btnFire.classList.remove('cardSelected')

        audioShop.play()
        audioForest.pause()
        audioRain.pause()
        audioFire.pause()

    } else {
        // Checkbox is not checked
        btnShop.classList.remove('cardSelected')
        audioShop.pause()
    }
});

checkbox4.addEventListener('click', () => {
    if (checkbox4.checked) {
        // Checkbox is checked
        checkbox1.checked = false
        checkbox2.checked = false
        checkbox3.checked = false

        btnFire.classList.add('cardSelected')
        btnForest.classList.remove('cardSelected')
        btnRain.classList.remove('cardSelected')
        btnShop.classList.remove('cardSelected') 
        
        audioFire.play()
        audioShop.pause()
        audioForest.pause()
        audioRain.pause()

    } else {
        // Checkbox is not checked
        btnFire.classList.remove('cardSelected')
        audioFire.pause()
    }
});




