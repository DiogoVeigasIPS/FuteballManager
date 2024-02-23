function removePlayer(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/player/' + id);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            info.unemployedPlayers.splice(info.unemployedPlayers.findIndex(i => i.id === id), 1);
            info.showPlayers();
        }
    };
    xhr.send();
}

function removeTeam(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/team/' + id);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            info.teams.splice(info.teams.findIndex(i => i.id === id), 1);
            info.showTeams();
        }
    };
    xhr.send();
}

function removeCompetition(id) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/competition/' + id);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            info.competitions.splice(info.competitions.findIndex(i => i.id === id), 1);
            info.showCompetitions();
        }
    };
    xhr.send();
}

function removePlayerFromTeam(index, array, teamName) {
    var player = array[index];
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/removePlayerFromTeam/' + player.id);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            //jogador despedido muda de sitio, nao eliminado
            array.splice(index, 1)[0]
            info.unemployedPlayers.push(player)
            //Mostrar jogadores dentro da competição
            info.findTeamPlayers(teamName, array)
        }
    };
    xhr.send();
}

function removeTeamFromCompetition(index, array, name) {
    var team = array[index];
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/removeTeamFromCompetition/' + team.id);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            //remover a equipa
            array.splice(index, 1)
            //Mostrar equipas dentro da competição
            info.findCompetitionTeams(name, array)
        }
    };
    xhr.send();
}

function clearCommonInformation() {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/clearInformation');
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            info.teams = [];
            info.unemployedPlayers = [];
            info.competitions = [];
        }
    };
    xhr.send();
}