function processPlayer(player, httpAction) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    if (httpAction === 'create') {
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                const newPlayer = new Player(xhr.response.insertId,
                    player.name, player.birthDate, player.idCountry,
                    player.height, player.position
                );
                info.unemployedPlayers.push(newPlayer);
                info.showPlayers();

                showToast("Sucess", `${player.name} has been created sucessfully`)

            } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
                showToast("Warning", `${player.name} has not been created`)
            }
        }
        xhr.open('POST', '/player');
    } else if (httpAction === 'update') {
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                info.unemployedPlayers[info.unemployedPlayers.findIndex(p => p.id === player.id)] = player;
                info.showPlayers();
            }
        }
        xhr.open('PUT', '/player/' + player.id);
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(player));
}

function processTeam(team, httpAction) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    if (httpAction === 'create') {
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                const newTeam = new Team(xhr.response.insertId,
                    team.name, team.acronym, team.idCountry, team.url, team.description
                );
                info.teams.push(newTeam);
                info.showTeams();

                showToast("Sucess", `${team.name} has been created sucessfully`)
            } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
                showToast("Warning", `${team.name} has not been created`)
            }
        }
        xhr.open('POST', '/team');
    } else if (httpAction === 'update') {
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                info.teams[info.teams.findIndex(t => t.id === team.id)] = team;
                info.showTeams();
            }
        }
        xhr.open('PUT', '/team/' + team.id);
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(team));
}

function processCompetition(competition, httpAction) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    if (httpAction === 'create') {
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                const newCompetition = new Competition(xhr.response.insertId,
                    competition.name, competition.edition, competition.state
                );
                info.competitions.push(newCompetition);
                info.showCompetitions();

                showToast("Sucess", `${competition.name} has been created sucessfully`)
            } else if (this.readyState === XMLHttpRequest.DONE && this.status !== 200) {
                showToast("Sucess", `${competition.name} has been created sucessfully`)
            }
        }
        xhr.open('POST', '/competition');
    } else if (httpAction === 'update') {
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                info.competitions[info.competitions.findIndex(c => c.id === competition.id)] = competition;
                info.showCompetitions();
            }
        }
        xhr.open('PUT', '/competition/' + competition.id);
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(competition));
}

function addPlayerInTeam(player, team) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            team.players.push(player);
        }
    }
    //Que tipo de operação e que caminho será executado
    xhr.open('POST', '/addPlayerInTeam');
    //Que tipo de informação será enviada?
    xhr.setRequestHeader('Content-Type', 'application/json');
    //O que enviar para o backend?
    xhr.send(JSON.stringify({ player: player.id, team: team.id }));
}

function addTeamInCompetition(team, competition) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            const response = xhr.response;
            const newTeamId = response[0][0].lastAddedTeam

            team.id = newTeamId
            competition.teams.push(team);
        }
    }
    //Que tipo de operação e que caminho será executado
    xhr.open('POST', '/addTeamInCompetition');
    //Que tipo de informação será enviada?
    xhr.setRequestHeader('Content-Type', 'application/json');
    //O que enviar para o backend?
    xhr.send(JSON.stringify({ team: team.id, competition: competition.id }));
}

function storeGames(games, competition) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            //assim que os jogos foram decididos e guardados, podem ser apresentados abaixo
            info.playCompetition(competition)
        }
    }
    xhr.open('POST', '/storeGames/' + competition);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
        games: games.map(g => new Game(g.id, g.team1.id, g.team2.id, g.goalsTeam1, g.goalsTeam2, g.team1Won))
    }
    ));
}

function updateCompetitionState(competition, state) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            competition.state = state;
            //Mostrar competicao
            info.showCompetitions();
        }
    }
    xhr.open('PUT', '/updateCompetitionState/' + competition.id);
    xhr.setRequestHeader('Content-Type', 'application/json');

    if (state !== true)
        xhr.send(JSON.stringify({ state: state }));
    else
        xhr.send(JSON.stringify({ state: state, winner: competition.winner.id }));
}

function resetFootballInformation() {
    const loader = document.querySelector('#loader')
    loader.style.display = 'flex'

    const xhr = new XMLHttpRequest();
    xhr.open('PUT', '/resetInformation');
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            //acabou loading
            loader.style.display = 'none'
            //reload
            localStorage.clear()
            location.reload()
        }
    };
    xhr.send();
}