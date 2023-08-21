const inputUserGithub = document.querySelector('#input-search')
const btnFavoriteUser = document.querySelector('.search button')

const tbodyUser = document.querySelector('.tbodyUser')
const tbodyNoUser = document.querySelector('.tbodyNoUser')

function removeDefaultTrs() {
    const tr = tbodyUser.querySelectorAll('tr')

    tr.forEach( tr => { tr.remove() } )
}
document.addEventListener('DOMContentLoaded', removeDefaultTrs)


btnFavoriteUser.addEventListener('click', () => {
    const userGithub = inputUserGithub.value
    
    requestGithubApi(userGithub)
})

async function requestGithubApi(userGithub) {
    try {
        const savedUsers = getUsersFromLocalStorage()
        const userExists = savedUsers.some(user => user.login.trim().toLowerCase() === userGithub.trim().toLowerCase());

        if (userExists) {
            throw Error('Usuário já existe no LocalStorage')
        }

        const request = await fetch(`https://api.github.com/users/${userGithub}`)
        const convertedRequest = await request.json()

        if (convertedRequest.login === undefined) {
            throw Error(' usuário não existe')
        }

        const userData = 
        {
            name: convertedRequest.name,
            login: convertedRequest.login,
            public_repos: convertedRequest.public_repos,
            followers: convertedRequest.followers
        }
        
        saveUserGithubOnLocalStorage(userData)
        createRow(userData)

    } catch(erro) {
        alert('Erro do catch'+ erro)

    }
}

function createRow(userData) {
    toggleClassTbody()

    const tr = document.createElement('tr')
    tr.innerHTML = `<tr>
            <td class="user">
                <img src="https://github.com/${userData.login}.png" alt="foto github de ${userData.name}">
                <a href="https://github.com/${userData.login}" target="_blank">
                        <p>${userData.name}</p>
                        <span>/${userData.login}</span>
                </a>
                </td>
            <td class="Repos">${userData.public_repos}</td>
            <td class="Followers">${userData.followers}</td>
            <td class="action">Remover</td>
        </tr>`
    
    tbodyUser.appendChild(tr)  

}

// Deleta linha
tbodyUser.addEventListener('click', (event) => {

    if (event.target.classList.contains('action')) {

        const row = event.target.closest('tr')

        // captura o login do usuário ao analisar o atributo href do link na célula correspondente à classe "user". Assim removendo o prefixo "https://github.com/" para obter apenas o login do usuário
        const login = row.querySelector('.user a').getAttribute('href').replace('https://github.com/', '')

        const deleteRow = confirm('Tem certeza que deseja excluir o usuário?')
        
        if (deleteRow) {

            row.remove()
            removeUsersFromLocalStorage(login)

        }
    }
})

function toggleClassTbody(){
    tbodyUser.classList.remove('hide')
    tbodyNoUser.classList.add('hide')
}


function saveUserGithubOnLocalStorage(userData) {
    const savedUsers = getUsersFromLocalStorage()

    savedUsers.push(userData)
    localStorage.setItem('userGithub', JSON.stringify(savedUsers))
}

function getUsersFromLocalStorage() {
    const savedUsers = localStorage.getItem('userGithub')

    if (savedUsers) {
        return JSON.parse(savedUsers)

    }else {
        return []

    }

}

function removeUsersFromLocalStorage(login) {
    const savedUsers = getUsersFromLocalStorage()

    // FILTRAR os usuários cujo LOGIN seja DIFERENTE do login que desejamos remover.
    const updateUsers =  savedUsers.filter( (user) => user.login !== login )

    // SETA no LocalStorage o novo array contendo os OBJETOS com LOGIN  DIFERENTE do que aquele que removemos.
    localStorage.setItem('userGithub', JSON.stringify(updateUsers))
    
}

function updateWhenReload() {
    const savedUsers = getUsersFromLocalStorage()

    if (savedUsers.length > 0 ) {

        toggleClassTbody()
        savedUsers.forEach( user => createRow(user))
    }
}
document.addEventListener('DOMContentLoaded', updateWhenReload)