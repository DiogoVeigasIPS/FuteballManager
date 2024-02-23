const express = require("express");
const bodyParser = require("body-parser");
const requestHandlers = require("./scripts/request-handlers.js");

const app = express();
app.use(express.static("www"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//fix favicon
app.use('/favicon.ico', express.static('www/futeIco.ico'));


/* Requests */
// Positions
app.get("/position",
    requestHandlers.getPositions);
app.get("/position/:acronym",
    requestHandlers.getPosition);

// Countries
app.get("/country",
    requestHandlers.getCountries);
app.get("/country/:id",
    requestHandlers.getCountry);

// Players
app.get("/player",
    requestHandlers.getPlayers);
app.get("/player/:id",
    requestHandlers.getPlayer);
app.post("/player", 
    requestHandlers.createUpdatePlayer);
app.put("/player/:id", 
    requestHandlers.createUpdatePlayer);
app.delete("/player/:id", 
    requestHandlers.removePlayer);

// Teams
app.get("/team",
    requestHandlers.getTeams);
app.get("/team/:id",
    requestHandlers.getTeam);
app.post("/team",
    requestHandlers.createUpdateTeam);
app.put("/team/:id",
    requestHandlers.createUpdateTeam);
app.delete("/team/:id", 
    requestHandlers.removeTeam);

// Competitions
app.get("/competition",
    requestHandlers.getCompetitions);
app.get("/competition/:id",
    requestHandlers.getCompetition);
app.post("/competition",
    requestHandlers.createUpdateCompetition);
app.put("/competition/:id",
    requestHandlers.createUpdateCompetition);
app.delete("/competition/:id",
    requestHandlers.removeCompetition);

// Games
app.get("/game",
    requestHandlers.getGames);

//Add Player into Team
app.post('/addPlayerInTeam', 
    requestHandlers.addPlayerInTeam);
app.delete('/removePlayerFromTeam/:id', 
    requestHandlers.removePlayerFromTeam);

//Add Team in Competition
app.post('/addTeamInCompetition', 
    requestHandlers.addTeamInCompetition);
app.delete('/removeTeamFromCompetition/:id', 
    requestHandlers.removeTeamFromCompetition);

//Store Game
app.post('/storeGames/:id', 
    requestHandlers.storeGames);

//Update Competition State
app.put('/updateCompetitionState/:id', 
    requestHandlers.updateCompetitionState); 

//Delete all information
app.delete('/clearInformation',
    requestHandlers.clearInformation)

//Restart all information
app.put('/resetInformation',
    requestHandlers.resetInformation)
    

app.listen(8081, function () {
    console.log("Server running at http://localhost:8081");
});

