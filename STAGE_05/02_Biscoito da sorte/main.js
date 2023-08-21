const home = document.querySelector('.home')
const cookie = document.querySelector('#cookie')

const lucky = document.querySelector('.lucky')
const btnTryAgain = document.querySelector('#btnTryAgain')

const luckyPhrase = document.querySelector('#luckyPhrase')


cookie.addEventListener('click', function() {
    toggleClass()

    chooseRandomPhrase()
})

btnTryAgain.addEventListener('click', function() {
    toggleClass()
})


function toggleClass() {
    home.classList.toggle('hide')
    lucky.classList.toggle('hide')
}


const phrases = 
[
    "Acredite em si mesmo e tudo será possível.",
    "O único limite é aquele que você impõe a si mesmo.",
    "Persista, pois o caminho para o sucesso é construído passo a passo.",
    "Seja a mudança que você deseja ver no mundo.",
    "Nunca desista, pois as maiores conquistas vêm para aqueles que perseveram.",
    "Cada novo dia é uma oportunidade para recomeçar e alcançar seus objetivos."
]

function chooseRandomPhrase() {
     const randomNumber = Math.floor(Math.random() * phrases.length) 
     luckyPhrase.innerHTML = phrases[randomNumber]
}

