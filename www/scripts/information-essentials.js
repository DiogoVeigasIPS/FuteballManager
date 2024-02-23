/**
 * Retorna o nome do link atual
 */
function navLinkName() {
    var navBarLinkContent = null
    const links = document.querySelectorAll('#anchorList a')
    links.forEach(link => {
        const element = document.querySelector('#' + link.id)
        if (element.classList.contains('active')) {
            navBarLinkContent = element.textContent
        }
    })

    return navBarLinkContent
}


/**
 * Deixa um link nav "selecionado"
 */
function addActive(id) {
    document.querySelector('#' + id).classList.add('active')
}

/**
 * Remove a classe de ativação de um link que o tenha
 */
function removeActiveClass() {
    const links = document.querySelectorAll('#anchorList a')
    links.forEach(link => {
        const element = document.querySelector('#' + link.id).classList
        if (element.contains('active'))
            element.remove('active')
    })
}

/**
 * Mostrar a tab
 */
function showTab(tabId) {
    document.querySelector('#' + tabId).style.visibility = 'visible'
}
/**
 * Esconder a tab 
 * */
function hideTab(tabId) {
    document.querySelector('#' + tabId).style.visibility = 'hidden'
}
/**
 * Desativar a tab
 */
function disableTab() {
    document.querySelector('#backTab').style.visibility = 'hidden'
}

/**
 * Ativar a tab para voltar atrás
 */

function activateTab() {
    var tab = document.querySelector('#backTab')
    tab.style.visibility = 'visible'
}

/**
 *  Entre tab de mostrar e criar registos
 */
function alternateTabs(index) {
    const tabs = document.querySelectorAll('.show-form')
    tabs.forEach((tab, thisIndex) => {
        if (index === thisIndex)
            tab.classList.add('active')
        else
            tab.classList.remove('active')
    })
}

/* Mostra e esconde tabela ou formulario */
function showOneHideOther(show, hide) {
    if (show)
        document.querySelector("#" + show).style.display = "block"

    if (hide)
        document.querySelector("#" + hide).style.display = "none"
}

/**
 * Altera o conteúdo da vista dinâmica
 * Caso a mensagem não possua valor, o valor será correspondente à página atual
 */
function updateDynamicView(message) {
    if (!message) {
        const links = document.querySelectorAll('#anchorList a')
        links.forEach(link => {
            const element = document.querySelector('#' + link.id).classList
            if (element.contains('active'))
                message = link.textContent
        })
    }

    document.querySelector('#dynamicView').textContent = message
}

/**
 * Altera o tipo de conteúdo da vista dinâmica
 */
function updateDynamicAction(action) {
    if (!action)
        action = 'Viewing'

    document.querySelector('#dynamicAction').textContent = action
}

/**
 * Verifica o numero de colunas uma pagina pode ter 
 * e retorna um objeto com esse numero de chaves
 */
function getEmptyObject() {
    var emptyObject = {}
    var objectLength = 0
    switch (navLinkName()) {
        case 'Competitions':
            objectLength = Object.keys(new Competition()).length - 2
            break;
        case 'Teams':
            objectLength = Object.keys(new Team()).length - 1
            break;
        case 'Players':
            objectLength = Object.keys(new Player()).length - 1
            break;
    }

    //Vencedor
    objectLength -= (info.backHistory.at(-1) && info.backHistory.at(-1)[4] === true) ? 1 : 0
    //Simplemente por ter histórico
    objectLength -= (info.backHistory.at(-1)) ? 1 : 0

    //object keys, chaves enumeraveis de um objeto
    for (let i = 0; i < objectLength; i++) {
        emptyObject[i] = ""
    }

    return emptyObject
}


/**
 * Serve para preencher uma tabela com os dados de um objeto
 * O array recebe os cabeçalhos 
 */
function updateTableContent(array, ...args) {
    if (!array) {
        console.error('An array should be sent as argument')
        return
    }
    var tableHeaders = [...args]

    const table = document.createElement('table')
    table.classList.add('table')
    table.classList.add('table-striped')
    table.classList.add('table-hover')
    table.classList.add('table-bordered')
    /* table.classList.add('table-sm') */

    const thead = document.createElement('thead')
    thead.classList.add('table-success')
    thead.appendChild(tableLine(tableHeaders, true))
    table.appendChild(thead)

    const tbody = document.createElement('tbody')
    for (const item of array) {
        tbody.appendChild(tableLine(item))
    }

    /* Verificar se o array não tem registos */
    if (array.length === 0) {
        console.error("Data not found")
        //apresentar uma linha vazia
        const emptyObject = getEmptyObject()
        tbody.appendChild(tableLine(emptyObject))
    }

    table.appendChild(tbody)
    const divInfo = document.querySelector('#contentTable')
    divInfo.replaceChildren(table)
}

/**
 * Calcular a idade dos jogadores e devolver os jogadores com a idade em vez da data 
 */
function calculateAge(players) {
    const notNullPlayers = players.filter(p => p.id !== null)

    const agedPlayers = notNullPlayers.map(player => {
        const currentDate = new Date();
        const birthDate = new Date(player.birthDate);

        const diffInMs = currentDate.getTime() - birthDate.getTime()

        const diffInDays = diffInMs / (1000 * 60 * 60 * 24); //Segundo * Minuto * Hora * Dia 

        const age = Math.floor(diffInDays / 365.25) //Dias para ano e converter para número inteiro

        return {
            id: player.id, name: player.name,
            birthDate: age, idCountry: player.idCountry,
            height: player.height, position: player.position
        }
    })
    return agedPlayers
}

/** 
 * Esconde todos os formulários excepto um
 */
function hideFormsExceptOne(id) {
    const forms = document.querySelectorAll('#forms .form')

    forms.forEach(form => {
        if (form.id === id) {
            form.style.display = 'block'
        } else {
            form.style.display = 'none'
        }
    })
}

/** 
 * Retorna dois anos antes ou dois anos depois do ano atual
 */
function getYear(sum) {
    return new Date().getFullYear() + (sum || 0)
}

function getDate(sum) {
    const date = new Date(getYear(sum || 0)).toLocaleDateString() //calcula um numero de anos antes do atual
    return date.split('/').reverse().join('-') //troca a ordem e adiciona hifen
}


//Verificações de inputs

/** 
 * Verifica se um input só tem letras 
 */
function onlyLetters(input) {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/; //permite letras, espaços e acentos apenas
    if (!regex.test(input))
        return false

    return true;
}

/** 
 * Verifica se o comprimento de uma string está dentro de um intervalo 
 */
function inInterval(string, min, max) {
    if (string.length >= min && string.length <= max)
        return true

    return false
}

/**  
 *Verificar que data é mais antiga 
 */
function firstIsOlder(date1, date2) {
    const d1 = new Date(date1)
    const d2 = new Date(date2)

    if (d1.getTime() <= d2.getTime())
        return true
    return false
}

/**
 *Esconder todos os erros 
 */
function hideErrors() {
    const errors = document.querySelectorAll('.invalid-feedback')
    errors.forEach(error => {
        error.style.display = 'none'
        error.textContent = ''
    })
}

/** 
 *Atribuir um erro a um input específico 
 */
function showError(id, message) {
    const error = document.querySelector('#' + id).nextElementSibling
    error.style.display = 'block'
    error.textContent = message
}

/**
 *Mostrar modal com titulo e mensagem
 */
function showModal(title, message) {
    const myModal = document.querySelector('#modal')
    document.querySelector('#modalTitle').textContent = title || "Confirmation"
    document.querySelector('#modalMessage').textContent = message || "Are you sure you want to save the changes made?"

    const modal = new bootstrap.Modal(myModal)//bootstrap
    modal.show()
}

/** 
 *Mostrar toast com titulo e mensagem
 */
function showToast(title, message) {
    const myToast = document.querySelector('#toast')
    document.querySelector('#toast-title').textContent = title || "Warning"
    document.querySelector('#toast-message').textContent = message || "The current service is not available"

    //bootstrap
    const toast = new bootstrap.Toast(myToast, {
        autohide: true,
        delay: 6000
    })
    toast.show()
}

/**
 *Funcao do botao 
 */
function toggleFormButtons(currentAction) {
    switch (currentAction) {
        case 'Editing':
            document.getElementById('compAdd').style.display = 'none'
            document.getElementById('teamAdd').style.display = 'none'
            document.getElementById('playerAdd').style.display = 'none'

            document.getElementById('compEdit').style.display = 'inline-block';
            document.getElementById('teamEdit').style.display = 'inline-block';
            document.getElementById('playerEdit').style.display = 'inline-block';
            break;
        case 'Creating':
        default:
            document.getElementById('compAdd').style.display = ''
            document.getElementById('teamAdd').style.display = 'inline-block'
            document.getElementById('playerAdd').style.display = 'inline-block'

            document.getElementById('compEdit').style.display = 'none';
            document.getElementById('teamEdit').style.display = 'none';
            document.getElementById('playerEdit').style.display = 'none';
            break;
    }
}

/*Verificações dos dados*/

/**
 * Verificação dos dados da competição
 */
function validateCompetition(name, date) {
    if (!name || !date) {
        showError('generalError', "Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!onlyLetters(name)) {
        showError('competitionName', "O nome deve levar só letras")
        return false;
    }

    if (!inInterval(name, 3, 20)) {
        showError('competitionName', "Introduza entre 3 a 20 caracteres")
        return false;
    }

    const dateLimits = document.getElementById("competitionEdition");
    if (date < dateLimits.min || date > dateLimits.max) {
        showError('competitionEdition', "Só possivel criar uma edição com 2 anos de diferença do ano currente")
        return false;
    }

    return true;
}

/**
 * Verificação dos dados da equipa
 */
function validateTeam(name, acronym, idCountry, url, description) {
    if (!name || !acronym || !idCountry) {
        showError('teamDescription', "Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!onlyLetters(name)) {
        showError('teamName', "O nome só deve possuir letras")
        return false;
    }

    if (!inInterval(name, 3, 20)) {
        showError('teamName', "Introduza entre 3 a 20 caracteres")
        return false;
    }

    if (!onlyLetters(acronym)) {
        showError('teamAcronym', "O acronimo leva só letras")
        return false;
    }

    if (!inInterval(acronym, 3, 4)) {
        showError('teamAcronym', "Introduza entre 3 a 4 caracteres")
        return false;
    }

    if (!inInterval(description, 0, 30)) {
        showError('teamDescription', "Introduza no máximo 30 caracteres")
        return false;
    }

    const urlPattern = /^https?:\/\/\S+$/i;
    if (url && !urlPattern.test(url)) {
        showError('teamURL', "URL inválido");
        return false;
    }
    return true;
}

/**
 * Verificação dos dados do jogador
 */
function validatePlayer(name, birthDate, idCountry, height, position) {
    if (!name || !birthDate || !idCountry || !height || !position) {
        showError('playerCountry', "Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!onlyLetters(name)) {
        showError('playerName', "O nome só deve possuir letras")
        return false;
    }

    if (!inInterval(name, 3, 20)) {
        showError('playerName', "Introduza entre 3 a 20 caracteres")
        return false;
    }

    if (height < 1.5 || height > 2.4) {
        showError('playerHeight', "Introduza um valor entre 1.50 a 2.40")
        return false;
    }

    const minMaxDate = document.getElementById("playerBirthDate")
    if (!firstIsOlder(minMaxDate.min, birthDate) || !firstIsOlder(birthDate, minMaxDate.max)) {
        showError('playerBirthDate', "Introduza uma data entre 1980 e 2007")
        return false;
    }
    return true;
}

/**
 * Função responsável por determinar que equipas podem ser adicionadas a dada competição
*/
function getToAddTeams(teams, parent) {
    let teamsToShow = [];

    teams.forEach(t => {
        if (t.players.length >= 11) {
            teamsToShow.push(t);
        }
    });

    // Array com os nomes das equipas
    const existingTeamNames = parent.teams.map(t => t.name);

    // Recebe array com equipas cujo nome não se encontra no array de nomes
    teamsToShow = teamsToShow.filter(t => !existingTeamNames.includes(t.name));

    return teamsToShow;
}

/**
 * Função responsável por remover uma linha da tabela
 */
function removeLineFromTable(idToRemove) {
    const rows = document.querySelectorAll('#contentTable table tbody tr')
    for (let row of rows) {
        //id vem da tabela, ou seja, string
        if (parseInt(row.querySelector('td').textContent) === idToRemove) {
            row.style.display = 'none'
        }
    }
}

/**
 * Função que espera que o botão de confirmação seja pressionado à base de promessas
 */
function confirmationBoxPromisse(callback, callback2 = () => { }) {
    let accept = new Promise((resolve, reject) => {
        // Confirmou o modal
        document.querySelector('#modalButton').addEventListener('click', () => {
            resolve(true);
        });

        document.querySelector('#modal').addEventListener('hidden.bs.modal', () => {
            //Saiu do modal
            reject('dismissed');
        });
    });

    accept
        .then((accepted) => {
            if (accepted) {
                callback();
            }
        }).catch((dismissed) => {
            if (dismissed) {
                callback2()
            }
        })
}

/**
 * Função que elimina todos os dados no armazenamento local
 */
function resetInformation() {
    showModal('Reset?', 'This will reset the information of the database.')

    confirmationBoxPromisse(() => {
        if (typeof (Storage) !== undefined) {
            resetFootballInformation()
        }
    })
}

/**
 * Função que elimina todos os dados atuais
 */
function clearInformation() {
    showModal('Clear?', 'If you clear the information, you will need to either create new one reset it.');

    confirmationBoxPromisse(() => {
        clearCommonInformation()
    })
}

/**
 * Função que verifica as animações para a página atual
 */

function checkAnimations() {
    switch (navLinkName()) {
        case 'Home':
            document.querySelector('body').style.overflow = 'none'
            break
        default:
            /* gsap.killTweensOf('#homeDiv');
            document.querySelector('#homeDiv').style.display = 'none' */
            break
    }
}
/**
 * Gera os golos de um jogo de cada equipa aleatoriamente de 0 a 10
 */
function putGoals(game) {
    const maxGoals = 10
    game.goalsTeam1 = Math.floor(Math.random() * maxGoals)
    game.goalsTeam2 = Math.floor(Math.random() * maxGoals)
}
/**
 * Declara qual a equipa vencedora
 */
function addVictory(game) {
    //verificar quem tem mais golos
    if (game.goalsTeam1 > game.goalsTeam2) {
        game.team1Won = true
    } else {
        game.team1Won = false
    }
}
/**
 * Após de correr a função para dar set às propriedades, vai realizar os jogos até os golos de ambas as equipas 
 * forem diferentes poder declarar o vencedor do jogo, no SE final, se for true returna a team 1, senão a team 2
 */
function playGame(competition, team1, team2) {
    let nextGameId
    if (competition.games && competition.games.length > 0)
        nextGameId = competition.games.at(-1).id + 1
    else
        nextGameId = 1

    const game = new Game(nextGameId, team1, team2)

    let goalsMatched = false;

    while (!goalsMatched) {
        putGoals(game);

        //Empataram?
        if (game.goalsTeam1 === game.goalsTeam2) {
            game.goalsTeam1 = 0
            game.goalsTeam2 = 0
        } else {
            goalsMatched = true;
        }
    }

    addVictory(game)
    competition.games.push(game)

    if (game.team1Won)
        return game.team1

    return game.team2
}

/**
 * Função que troca as posições de um array aleatóriamente
 */

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Muda o ícone de dada competição para restart ou play
 */
function changeCompetitionPlayingIcon(icon, competitionId) {
    const rows = document.querySelectorAll('#contentTable table tbody tr')

    for (let row of rows) {
        //id vem da tabela, ou seja, string
        if (parseInt(row.querySelector('td').textContent) == competitionId) {
            let rowsNode = row.querySelectorAll('td a i')
            let iconAnchor = rowsNode[rowsNode.length - 1].classList

            if (iconAnchor.contains(icon)) {
                return
            }

            if (iconAnchor.contains('fa-play'))
                iconAnchor.remove('fa-play')

            if (iconAnchor.contains('fa-reload-right'))
                iconAnchor.remove('fa-reload-right')

            iconAnchor.add(icon)
        }
    }
}

/** 
 * Retorna texto do ícone atual de jogar uma competição (play / reload)
 */
function realodCompetition(competitionId) {
    const rows = document.querySelectorAll('#contentTable table tbody tr')

    for (let row of rows) {
        //id vem da tabela, ou seja, string
        if (parseInt(row.querySelector('td').textContent) == competitionId) {
            let rowsNode = row.querySelectorAll('td a i')
            let classList = [...rowsNode[rowsNode.length - 1].classList]

            let iconClass = classList.find(clas => clas === 'fa-rotate-right')

            if (iconClass)
                return true

            return false
        }
    }
}

/**
 * Joga todos os jogos de uma dada competição
 */
function playAllGames(competition, teamsPlaying) {
    // Loop até restar apenas um vencedor
    while (teamsPlaying.length > 1) {
        const nextRoundTeams = [];
        for (let i = 0; i < teamsPlaying.length; i += 2) {
            const team1 = teamsPlaying[i];
            const team2 = teamsPlaying[i + 1];
            const winnerTeam = playGame(competition, team1, team2);
            nextRoundTeams.push(winnerTeam);
        }
        teamsPlaying = nextRoundTeams;
    }
}

/**
 * Show a specific number of games
 */
function showNumberOfGames(competition, competitionGames, min, max) {
    if(!competition.games){
        console.error('Games not found')
        return
    }

    for (let i = min; i < max; i++) {
        const game = competition.games[i]

        competitionGames.push({
            id: game.id, team1: game.team1.name, goals1: game.goalsTeam1,
            goals2: game.goalsTeam2, team2: game.team2.name,
            winner: game.team1Won ? game.team1.name : game.team2.name

        })
    }
    updateTableContent(competitionGames, 'ID', 'First Team', 'Goals', 'Goals', 'Second Team', 'Winner')

    const table = document.querySelector('.table tbody')

    const tableData = document.createElement('td')
    tableData.colSpan = "6";

    const anchor = document.createElement('a')
    anchor.addEventListener('click', () => {
        const min = document.querySelectorAll('.table tbody tr').length - 1

        const max = minMaxCompetitionNumber[min]

        console.log(min, max)

        if (max <= competition.teams.length) {
            showNumberOfGames(competition, competitionGames, min, max)
        } else {
            console.log("End of competition")//testar fim?
            showToast('Notification', 'End of competition');
            //remover botao no final
            tableRow.innerHTML = "";

            //guardar o ultimo jogo
            const lastGame = competition.games.at(-1);
            //Definir o vencedor apartir do ultimo jogo realizado
            const winner = lastGame.team1Won ? lastGame.team1 : lastGame.team2;
            //Guardar o vencedor
            competition.winner = winner;
            console.log(winner)
            //Jogos acabaram, guardar estado e vencedor
            updateCompetitionState(competition, true)
        }
    })

    anchor.innerHTML = '<i class="fa-solid fa-eye seeDetails"></i>'
    tableData.appendChild(anchor)

    const tableRow = document.createElement('tr')
    tableRow.appendChild(tableData)

    table.appendChild(tableRow)
}
/**
 * Mudar entre adicionar e editar
 */
function toggleFormLink(action) {
    const formLink = document.getElementById('formLink');

    if (action === 'Editing') {
        formLink.textContent = 'Edit';
        formLink.removeAttribute('href');
    } else {
        formLink.textContent = 'Add';
        formLink.setAttribute('href', 'javascript: info.showForm()');
    }
}