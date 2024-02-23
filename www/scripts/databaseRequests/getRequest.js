function getCountry() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'country', true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if(!JSON.parse(xhr.responseText).countries){
                console.error('Failed to retrieve data, try to restart the server.')
                return;
            }

            const countriesWrongInstaceType = JSON.parse(xhr.responseText).countries;
            const countries = countriesWrongInstaceType.map(c => new Country(c.id, c.name, c.shortName));
            info.countries = countries;
        } else {
            console.error('Failed to get countries:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('An error occurred while getting countries.');
    };

    xhr.send();
}

function getPosition() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'position', true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if(!JSON.parse(xhr.responseText).positions){
                console.error('Failed to retrieve data, try to restart the server.')
                return;
            }
            const positionsWrongInstaceType = JSON.parse(xhr.responseText).positions;
            const positions = positionsWrongInstaceType.map(p => new Position(p.name, p.acronym));
            info.positions = positions;
        } else {
            console.error('Failed to get positions:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('An error occurred while getting positions.');
    };

    xhr.send();
}

function getPlayer() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'player', true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if(!JSON.parse(xhr.responseText).players){
                console.error('Failed to retrieve data, try to restart the server.')
                return;
            }
            const playersWrongInstaceType = JSON.parse(xhr.responseText).players;
            const players = playersWrongInstaceType.map(p =>
                new Player(p.id, p.name, p.birthDate, p.idCountry, p.height, p.position)
            );
            info.unemployedPlayers = players;
        } else {
            console.error('Failed to get players:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('An error occurred while getting players.');
    };

    xhr.send();
}

function getTeam() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'team', true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if(!JSON.parse(xhr.responseText).teams){
                console.error('Failed to retrieve data, try to restart the server.')
                return;
            }
            const teamsWrongInstaceType = JSON.parse(xhr.responseText).teams;
            const teams = teamsWrongInstaceType.map(t =>
                new Team(t.id, t.name, t.acronym, t.idCountry, t.url, t.description, t.players)
            );
            info.teams = teams;
        } else {
            console.error('Failed to get teams:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('An error occurred while getting teams.');
    };

    xhr.send();
}

function getCompetition() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'competition', true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if(!JSON.parse(xhr.responseText).competitions){
                console.error('Failed to retrieve data, try to restart the server.')
                return;
            }
            const competitionsWrongInstaceType = JSON.parse(xhr.responseText).competitions;
            const competitionsWithoutProperWinner = competitionsWrongInstaceType.map(c => {
                const teams = c.teams
                    .filter(t => t.id !== null)
                    .map(t => new Team(t.id, t.name, t.acronym, t.idCountry, t.url, t.description, t.players));

                return new Competition(c.id, c.name, c.edition, c.winner, c.state, teams);
            });

            const competitions = competitionsWithoutProperWinner.map(c => {
                const winner = c.teams.find(t => t.id === c.winner);
                return new Competition(c.id, c.name, c.edition, winner, c.state, c.teams);
            });

            info.competitions = competitions;
        } else {
            console.error('Failed to get competitions:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('An error occurred while getting competitions.');
    };

    xhr.send();
}

function getGame() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'game', true);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            if(!JSON.parse(xhr.responseText).games){
                console.error('Failed to retrieve data, try to restart the server.')
                return;
            }
            const games = JSON.parse(xhr.responseText).games;

            games.forEach(g => {
                info.competitions.forEach(c => {
                    if (g.competitionId === c.id) {
                        const team1 = c.teams.find(t => t.id === g.team1);
                        const team2 = c.teams.find(t => t.id === g.team2);

                        if (team1 && team2) {
                            c.games.push(
                                new Game(
                                    g.idGame,
                                    team1,
                                    team2,
                                    g.goalsTeam1,
                                    g.goalsTeam2,
                                    g.team1Won
                                )
                            );
                        }
                    }
                });
            });

            //Esconder o loader de informação, sendo que é a última inserção
            const loader = document.getElementById('loader');
            loader.style.display = 'none';
        } else {
            console.error('Failed to get games:', xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error('An error occurred while getting games.');
    };

    xhr.send();
}
