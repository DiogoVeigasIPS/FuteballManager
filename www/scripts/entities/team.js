"use strict";

/** 
* @class description of the class 
* @constructs Team
* @param {int} id - id da equipa
* @param {string} name - nome da equipa
* @param {String} acronym - sigla da equipa
* @param {int} idCountry - id do país
* @param {String} url - url da equipa
* @param {String} description - descrição da equipa
* @param {Player[]} players - array de players
*/
class Team {
    constructor(id, name, acronym, idCountry, url, description, players = []) {
        this.id = id;
        this.name = name;
        this.acronym = acronym;
        this.idCountry = idCountry;
        this.url = url;
        this.description = description;
        this.players = players;

    }
}