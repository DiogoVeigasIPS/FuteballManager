"use strict";

/** 
* @class Estrutura com capacidade de armazenar um jogo, durante a inicialização de um jogo, 
*        optar por usar apenas o id, equipas e respetivos golos
* @constructs Game
* @param {int} id - ID / número de cada jogo
* @param {Team} team1 - Primeira equipa do jogo
* @param {Team} team2 - Segunda equipa do jogo
* @param {int} goalsTeam1 - Golos da primeira equipa
* @param {int} goalsTeam2 - Golos da segunda equipa
* @param {int} team1Won - É verdade caso a primeira equipa ganho, false se perder, nulo se ainda não tiver jogado
*/
class Game {
    constructor(id, team1, team2, goalsTeam1 = 0, goalsTeam2 = 0, team1Won = null){
        this.id = id
        this.team1 = team1
        this.team2 = team2
        this.goalsTeam1 = goalsTeam1
        this.goalsTeam2 = goalsTeam2
        this.team1Won = team1Won
    }
}