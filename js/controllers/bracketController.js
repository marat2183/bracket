import BracketService from "../services/bracketService.js";
import teamNum from "../matchesData.js";

const BracketController = class {
    constructor(bracketService){
        this.bracketService = bracketService;
    }

    render = () =>  {
        const roundsList = this.bracketService.getRoundsList();
        const bracket = document.createElement('div');
        bracket.classList.add('bracket');

        const roundsListBlock = document.createElement('div');
        roundsListBlock.classList.add('rounds-list');

        const roundsBlocks = roundsList.map(round => this.createRound(round));
        roundsListBlock.append(...roundsBlocks);
        console.log(roundsListBlock);

        const contentWrapperBlock = document.querySelector('.content__wrapper');
        contentWrapperBlock.append(roundsListBlock)
    }

    createRound = ({name, matchList}) => {
        const round = document.createElement('div');
        round.classList.add('round__item');

        const roundHeader = document.createElement('div');
        roundHeader.classList.add('round__header');

        const roundName = document.createElement('span');
        roundName.classList.add('round__name')
        roundName.textContent = name;

        roundHeader.append(roundName);
        const matches = matchList.map(match => this.createMatch(match));
        round.append(roundHeader, ...matches);
        console.log(round)
        return round;
    }

    createTeam = ({name, img, points}) => {
        const team = document.createElement('div');
        team.classList.add('team');

        const teamData = document.createElement('div');
        teamData.classList.add('team__data');

        const teamImg = document.createElement('img');
        teamImg.classList.add('team__img');
        teamImg.setAttribute('src', `./img/${img}.png`);

        const teamName = document.createElement('span');
        teamName.classList.add('team__name');
        teamName.textContent = name;

        const teamPoints = document.createElement('div');
        teamPoints.classList.add('team__points');

        const teamPointsValue = document.createElement('span');
        teamPointsValue.classList.add('team__points-value');
        teamPointsValue.textContent = points;

        teamData.append(teamImg, teamName);
        teamPoints.append(teamPointsValue);
        team.append(teamData, teamPoints)

        return team;

    }

    createMatch = (teamsList) => {
        const match = document.createElement('div');
        match.classList.add('match');
        const teams = teamsList.map(team => this.createTeam(team))
        match.append(...teams);
        return match;
    }

}

const bracketService = new BracketService(teamNum);

const bracket = new BracketController(bracketService);
bracket.render()