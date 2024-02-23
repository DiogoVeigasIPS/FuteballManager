"use strict";
/**
 * Função que será executada quando a página estiver toda carregada, criando a variável global "info" com um objeto Information
 * @memberof window
 * @params {Event} event - objeto que representará o evento
 */
window.onload = function (event) {
    var info = new Information("contentTable");//id do div

    /** obter dados da base de dados */
    window.info = info;

    getCountry()
    getPosition()

    getPlayer()
    getTeam()
    getCompetition()
    getGame()
};

/**
* Função que recebe um qualquer objeto e retorna dinamicamente uma linha de tabela HTML com informação relativa ao estado das suas propriedades
* @param {Object} object - objecto do qual vamos transformar o conteudo dos seus atributos em linhas
* @param {boolean} headerFormat - controla de o formato é cabeçalho ou linha normal
*/
function tableLine(object, headerFormat) {
    var tr = document.createElement("tr");
    var tableCell = null;
    var id = null;
    var hasChild = null;

    for (var property in object) {
        let content = object[property]; // desta maneira podemos escolher o texto do cabeçalho da tabela
        if (object[property] instanceof Function) continue;
        if (headerFormat) {
            tableCell = document.createElement("th");
            tableCell.scope = "col"; // bootstrap
            tableCell.textContent = content[0].toUpperCase() + content.slice(1);

            //esconder ID
            if (content.toLowerCase() === 'id') {
                tableCell.style.display = 'none'
            }
        } else {
            if (id === null) id = content;

            tableCell = document.createElement("td");
            tableCell.scope = "row"; // bootstrap

            //esconder ID
            if (property.toLowerCase() === 'id') {
                tableCell.style.display = 'none'
            }

            if (property === "url") {
                if (content === "") {
                    tableCell.textContent = "[Empty]";
                } else {
                    const urlAnchor = document.createElement("a");
                    urlAnchor.href = content;
                    urlAnchor.target = "_blank";
                    urlAnchor.innerHTML = content;
                    tableCell.appendChild(urlAnchor);
                }
            } else if (property === "games") {
                continue; // Não queremos apresentar jogos desta maneira, é melhor trabalhá-los apenas no play
            } else if (Array.isArray(content)) {
                // Se for um array, ou seja, equipas ou jogadores
                const detailAnchor = document.createElement("a");
                detailAnchor.href = `javascript: info.seeDetails(${id})`; // Precisamos possibilitar a vista detalhada
                const seeDetailsIcon = document.createElement("i");
                seeDetailsIcon.classList.add("fa-solid", "fa-eye", "seeDetails");
                const addAnchor = document.createElement("a");
                if (info.backHistory.length === 0) {
                    // Não se pode adicionar nada a filhos
                    addAnchor.href = `javascript: info.addChilds(${id})`; // Recebe o id do pai ao qual serão adicionados filhos
                    addAnchor.innerHTML = '<i class="fa-solid fa-circle-plus seeDetails"></i>'; // Ícone do botão "Add"
                    detailAnchor.appendChild(seeDetailsIcon);
                    detailAnchor.appendChild(addAnchor);
                } else {
                    detailAnchor.appendChild(seeDetailsIcon);
                }

                tableCell.appendChild(detailAnchor);
                hasChild = true;
            } else if (typeof content === "object" && property === "winner") {
                // Se é o vencedor de um jogo
                const detailAnchor = document.createElement("a");
                detailAnchor.href = `javascript: info.seeDetails(${id}, true)`; // Precisamos possibilitar a vista detalhada
                detailAnchor.innerHTML = content.name; // Nome da equipa
                detailAnchor.classList.add("seeDetails");
                detailAnchor.classList.add("winnerDetails");

                tableCell.appendChild(detailAnchor);
            } else {
                tableCell.textContent = tableRowConditions(property, content);
            }
        }
        tr.appendChild(tableCell);
    }

    // Remover, editar e adicionar filhos
    tr = addEditRemoveIcons(tr, id, headerFormat, object instanceof Competition);

    return tr;
}



/**
 * Recebe o país para guardar o seu ID e vai returnar o estado competição de acordo com o state da competição
 */
function tableRowConditions(property, content) {
    if (property === 'state') {//se for o estado de um campeonato
        if (content === null)
            return 'Waiting'
        else if (content === false)
            return 'Running'
        else
            return 'Finished'
    }

    if (property === 'idCountry') {
        const index = info.countries.findIndex(country => country.id === content)
        if (index > -1)
            content = info.countries[index].name
        else
            console.error('Country not found')
    }

    if (property === 'position') {
        const index = info.positions.findIndex(position => position.acronym === content)
        if (index > -1)
            content = info.positions[index].name
        else
            console.error('Position not found')
    }
    return content
}
/**
 * Criação dos botões de add, edit e remove, e as suas
 */
function addEditRemoveIcons(tr, id, headerFormat, isCompetition) {
    var tableCell = null
    var competitionState = null

    /* É competição? */
    if (isCompetition) {
        /* Receber o estado */
        const competition = info.competitions.find(c => c.id === id)
        if (competition) {
            competitionState = competition.state
        }
    }

    if (info.backHistory.at(-1) && info.backHistory.at(-1)[4] === true) {//se estamos a adicionar filhos
        if (!headerFormat) {
            tableCell = document.createElement("td");
            const editAnchor = document.createElement('a')
            editAnchor.href = `javascript: info.addOneChild(${id})`//Alterar consoante necessário
            editAnchor.innerHTML = '<i class="fa-solid fa-circle-plus seeDetails"></i>' //como meter este com o outro
            tableCell.appendChild(editAnchor)
            tr.appendChild(tableCell)
        } else { //este afecta o add interior
            tableCell = document.createElement("th");
            tableCell.textContent = 'Add'
            tr.appendChild(tableCell)
        }
    } else {
        // se nao estiver a adicionar filhos
        if (!headerFormat) {//celula AddButtonTest
            switch (navLinkName()) {//Countries nao alteram
                case 'Competitions':
                case 'Teams':
                case 'Players':
                    if (info.backHistory.length <= 1) {//nao se podem eliminar jogadores dentro de equipas dentro de competicoes
                        if (info.backHistory.length === 0) {//so se pode editar o principal
                            /* Editar */
                            tableCell = document.createElement("td");
                            const editAnchor = document.createElement('a')
                            if (competitionState !== null)
                                editAnchor.href = `javascript: showToast(undefined, 'Competition has already started')`
                            else
                                editAnchor.href = `javascript: info.editRow(${id})`//Alterar consoante necessário

                            editAnchor.innerHTML = '<i class="fa-solid fa-pencil seeDetails"></i>'
                            tableCell.appendChild(editAnchor)
                            tr.appendChild(tableCell)
                        }

                        /* Remover */
                        //se for vencedor de uma competicao, nao se deve apagar
                        if (info.backHistory.at(-1) && info.backHistory.at(-1)[3] === true)
                            break

                        tableCell = document.createElement("td");
                        const deleteAnchor = document.createElement('a')
                        deleteAnchor.href = `javascript: info.removeRow(${id})`//Alterar consoante necessário
                        deleteAnchor.innerHTML = '<i class="fa-solid fa-trash-can seeDetails"></i>'
                        tableCell.appendChild(deleteAnchor)
                        tr.appendChild(tableCell)


                    }
                    break;
            }
        } else {//cabecalho
            var tab = navLinkName()
            switch (tab) {//Countries nao alteram
                case 'Competitions':
                case 'Teams':
                case 'Players':
                    if (info.backHistory.length <= 1) {
                        if (info.backHistory.length === 0) {
                            //Edit
                            tableCell = document.createElement("th");
                            tableCell.textContent = 'Edit'
                            tr.appendChild(tableCell)
                        }

                        /* Remover */
                        //se for vencedor de uma competicao, nao se deve apagar
                        if (info.backHistory.at(-1) && info.backHistory.at(-1)[3] === true)
                            break
                        tableCell = document.createElement("th");
                        tableCell.textContent = 'Remove'
                        tr.appendChild(tableCell)

                    }
                    break;
            }
        }
    }

    /* É competição? */
    if (navLinkName() === 'Competitions' && (!info.backHistory || info.backHistory.length === 0)) {
        if (headerFormat) {
            tableCell = document.createElement("th");
            tableCell.textContent = 'Play'
            tr.appendChild(tableCell)
        } else {
            /* Adicionar botão jogar */
            tableCell = document.createElement("td");
            const editAnchor = document.createElement('a')
            editAnchor.href = `javascript: info.playCompetition(${id})`//Alterar consoante necessário
            editAnchor.innerHTML = '<i class="fa-solid fa-play seeDetails"></i>'
            tableCell.appendChild(editAnchor)
            tr.appendChild(tableCell)
        }
    }

    return tr
}