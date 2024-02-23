/**
 * @param noFunction
 * Zona em que não existem funções, ou seja, devem apenas ser carregadas quando a página carregar
 * 
 */

const competitionEdition = document.querySelector('#competitionEdition')
competitionEdition.min = getYear(-2)
competitionEdition.max = getYear(+2)
competitionEdition.value = getYear()

const playerBirthDate = document.querySelector('#playerBirthDate')
playerBirthDate.min = getDate(-16)//no minimo 16 anos
playerBirthDate.min = getDate(-50)//no maximo 50 anos

/**
 * Constantes
 */
//Numero maximo de equipas por competicao
const maxTeams = 16

//Relaçao entre minimo e maximo de jogos
const minMaxCompetitionNumber =
{
    2: 3,
    4: 6,
    6: 7,
    8: 12,
    12: 14,
    14: 15
}