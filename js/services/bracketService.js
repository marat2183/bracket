const BracketService = class {
    constructor(numOfTeams){
        this.numOfTeams = numOfTeams;
    }

    countRoundsNumber = () => {
        let counter = 0;
        let tempRes = this.numOfTeams;
        while (tempRes !== 1) {
            tempRes = tempRes / 2;
            counter++;
        }

        return counter
    }

    getRoundsList = () => {
        const roundsList = [];
        const roundsNum = this.countRoundsNumber();
        let numOfTeams = this.numOfTeams;
        for (let i = 0; i < roundsNum; i++){
            const obj = {};
            obj.name  = numOfTeams === 2 ? 'Final': `State 1/${numOfTeams / 2}`;
            obj.numOfMatches = numOfTeams / 2;
            roundsList.push(obj);
            numOfTeams = numOfTeams / 2
        }
        const result  = this.getMatchList(roundsList);
        return result;
    }

    getMatchList = (roundsList) => {
        const team = {
            'name': 'Invictus Gaming',
            'img': 'logo',
        }
        const rounds = roundsList;
        const updatedRoundsList = rounds.map(round => {
            round.matchList = [];
            for (let i = 0; i < round.numOfMatches; i++){
                const match = [
                    {...team, 'points': 2},
                    {...team, 'points': 1},
                ]
                round.matchList.push(match);
            }
            return round;
        })

        return updatedRoundsList;
    }


}

export default BracketService;