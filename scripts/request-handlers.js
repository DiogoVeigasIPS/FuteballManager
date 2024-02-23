const mysql = require("mysql2");
const options = require("./connection-options.json");

/**
 * Read
 */
function getPositions(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT acronym, name FROM position";

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "positions": rows
            });
        }
    });
}
module.exports.getPositions = getPositions;

function getCountries(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT * FROM country";

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "countries": rows
            });
        }
    });
}
module.exports.getCountries = getCountries;

function getPlayers(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select * from getPlayers order by name;";

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "players": rows
            });
        }
    });
}
module.exports.getPlayers = getPlayers;

function getTeams(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select * from getTeams order by name;";

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "teams": rows
            });
        }
    });
}
module.exports.getTeams = getTeams;

function getCompetitions(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select * from getCompetitions order by name;";

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "competitions": rows
            });
        }
    });
}
module.exports.getCompetitions = getCompetitions;

function getGames(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select * from getGames;";

    connection.query(query, function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "games": rows
            });
        }
    });
}
module.exports.getGames = getGames;

/**
 * Single read
 */

function getPosition(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT acronym, name FROM position where acronym = ?";

    connection.query(query, [req.params.acronym], function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "positions": rows
            });
        }
    });
}
module.exports.getPosition = getPosition;

function getCountry(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT * FROM country where id = ?";

    connection.query(query, [req.params.id], function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "countries": rows
            });
        }
    });
}
module.exports.getCountry = getCountry;

function getPlayer(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select * from getPlayers where id = ?;";

    connection.query(query, [req.params.id], function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "players": rows
            });
        }
    });
}
module.exports.getPlayer = getPlayer;

function getTeam(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select * from getTeams where id = ?;";

    connection.query(query, [req.params.id], function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "teams": rows
            });
        }
    });
}
module.exports.getTeam = getTeam;

function getCompetition(req, res) {
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "select * from getCompetitions where id = ?;";

    connection.query(query, [req.params.id], function (err, rows) {
        if (err) {
            res.json({ "message": "error", "error": err });
        } else {
            res.json({
                "message": "success", "competitions": rows
            });
        }
    });
}
module.exports.getCompetition = getCompetition;


/**
 * Create and update
 */

function createUpdatePlayer(req, res) {
    let connection = mysql.createConnection(options);
    let name = req.body.name;
    let birthday = req.body.birthDate.includes('T') ? req.body.birthDate.split('T')[0] : req.body.birthDate;
    let idCountry = req.body.idCountry;
    let height = req.body.height;
    let position = req.body.position;
    let sql = (req.method === 'PUT') ? "UPDATE player SET name = ?, birthDate = ?, idCountry = ?, height = ?, position = ? WHERE id = ?" : "INSERT INTO player(name, birthDate, idCountry, height, position) VALUES (?,?,?,?,?)";
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [name, birthday, idCountry, height, position, req.params.id], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.createUpdatePlayer = createUpdatePlayer;

function createUpdateTeam(req, res) {
    let connection = mysql.createConnection(options);
    let name = req.body.name;
    let acronym = req.body.acronym;
    let idCountry = req.body.idCountry;
    let url = req.body.url;
    let description = req.body.description;
    let sql = (req.method === 'PUT') ? "UPDATE team SET name = ?, acronym = ?, idCountry = ?, url = ?, description = ? WHERE id = ?" : "INSERT INTO team(name, acronym, idCountry, url, description) VALUES (?,?,?,?,?)";
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [name, acronym, idCountry, url, description, req.params.id], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.createUpdateTeam = createUpdateTeam;

function createUpdateCompetition(req, res) {
    let connection = mysql.createConnection(options);
    let name = req.body.name;
    let edition = req.body.edition;
    let state = req.body.state;
    let sql = (req.method === 'PUT') ? "UPDATE competition SET name = ?, edition = ?, state = ? WHERE id = ?" : "INSERT INTO competition(name,edition,state) VALUES (?,?,?)";
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [name, edition, state, req.params.id], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.createUpdateCompetition = createUpdateCompetition;

/**
 * Delete
 */

function removePlayer(req, res) {
    let query = 'DELETE FROM player WHERE id = ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id], function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        });
    });
}
module.exports.removePlayer = removePlayer;

function removeTeam(req, res) {
    let query = 'DELETE FROM playerInTeam WHERE idTeam = ?';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id], function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                //se foi possivel eliminar as conexoes, basta eliminar a equipa
                let query = 'DELETE FROM team WHERE id = ?';
                let connection = mysql.createConnection(options);
                connection.connect(function (err) {
                    if (err) throw err;
                    connection.query(query, [req.params.id], function (err) {
                        if (err) {
                            res.sendStatus(404);
                        } else {
                            res.sendStatus(200);
                        }
                    });
                });
            }
        });
    });
}
module.exports.removeTeam = removeTeam;

function removeCompetition(req, res) {
    let query = 'call spDeleteCompetition(?)';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, [req.params.id], function (err) {
            if (err) {
                res.sendStatus(404);
            } else {
                res.sendStatus(200);
            }
        });
    });
}
module.exports.removeCompetition = removeCompetition;

function addPlayerInTeam(req, res) {
    let connection = mysql.createConnection(options);
    let player = req.body.player;
    let team = req.body.team;
    let sql = 'insert into playerInTeam (idPlayer, idTeam) values (?, ?)';
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [player, team], function (err, rows) {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.addPlayerInTeam = addPlayerInTeam;

function removePlayerFromTeam(req, res) {
    let connection = mysql.createConnection(options);
    let sql = 'delete from playerInTeam where idPlayer = ?;';
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [req.params.id], function (err, rows) {
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.removePlayerFromTeam = removePlayerFromTeam;

//Enviar o id de inserção para criar a nova equipa com o id correto
function addTeamInCompetition(req, res) {
    let connection = mysql.createConnection(options);
    let team = req.body.team;
    let competition = req.body.competition;
    let sql = 'call spCreateTeamInCompetition(?, ?)';
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [competition, team], function (err, rows) {
            if (err) {
                res.sendStatus(500)
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.addTeamInCompetition = addTeamInCompetition;

function removeTeamFromCompetition(req, res) {
    let connection = mysql.createConnection(options);
    let sql = 'call spRemoveTeamFromCompetition(?);';
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(sql, [req.params.id], function (err, rows) {
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.removeTeamFromCompetition = removeTeamFromCompetition;

function storeGames(req, res) {
    const games = req.body.games;
    const idCompetition = req.params.id;

    const connection = mysql.createConnection(options);

    let valueSets = '';
    const values = games.map(game => {
        const { id, team1, team2, goalsTeam1, goalsTeam2, team1Won } = game;
        return [id, idCompetition, team1, team2, goalsTeam1, goalsTeam2, team1Won];
    });

    values.forEach((value, index) => {
        const placeholders = '?,?,?,?,?,?,?';
        if (index === values.length - 1) {
            valueSets += `(${placeholders})`;
        } else {
            valueSets += `(${placeholders}), `;
        }
    });

    const sql = `INSERT IGNORE INTO game(id, idCompetition, team1, team2, goalsTeam1, goalsTeam2, team1Won) VALUES ${valueSets};`;

    connection.connect(function (err) {
        if (err) throw err;

        connection.query(sql, values.flat(), function (err, rows) {
            if (err) {
                console.error(err);
                res.status(500).send('Error inserting games');
            } else {
                res.send(rows);
            }
        });
    });
}
module.exports.storeGames = storeGames;

function updateCompetitionState(req, res) {
    let connection = mysql.createConnection(options);
    let state = req.body.state;
    let winner = req.body.winner;

    let sql;
    if(winner){
        sql = "UPDATE competition SET state = ?, competitionWinner = ? where id = ?";
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(sql, [state, winner, req.params.id], function (err, rows) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.send(rows);
                }
            });
        });
    }else{
        sql = "UPDATE competition SET state = ? where id = ?";
        connection.connect(function (err) {
            if (err) throw err;
            connection.query(sql, [state, req.params.id], function (err, rows) {
                if (err) {
                    res.sendStatus(500);
                } else {
                    res.send(rows);
                }
            });
        });
    }   
}
module.exports.updateCompetitionState = updateCompetitionState;

function clearInformation(req, res){
    let query = 'call spClearInformation();';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, function (err) {
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200);
            }
        });
    });
}
module.exports.clearInformation = clearInformation;

function resetInformation(req, res){
    let query = 'call spResetInformation();';
    let connection = mysql.createConnection(options);
    connection.connect(function (err) {
        if (err) throw err;
        connection.query(query, function (err) {
            if (err) {
                res.sendStatus(500)
            } else {
                res.sendStatus(200);
            }
        });
    });
}
module.exports.resetInformation = resetInformation;