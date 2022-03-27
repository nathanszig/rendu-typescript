import {Thief} from "../class/Thief"
import {Team} from "../class/Team"

export const battle = (team1: Team, team2: Team) => {

    while (team1.isAliveCharacter() && team2.isAliveCharacter()) {
        const startTeam: number = Math.random()

        if (startTeam <= 0.5) {
            var firstTeam: Array < Thief > = team2.characters;
            var secondTeam: Array < Thief > = team1.characters;
        } else {
            var firstTeam: Array < Thief > = team1.characters;
            var secondTeam: Array < Thief > = team2.characters;
        }

        var sortedFirstTeam = firstTeam.sort((a, b) => b.getSpeed() - a.getSpeed())
        var sortedSecondTeam = secondTeam.sort((a, b) => b.getSpeed() - a.getSpeed())

        for (var i = 0; i < sortedFirstTeam.length; i++) {
            if (sortedFirstTeam[i].isAlive()) {
                sortedSecondTeam[Math.floor(Math.random() * sortedSecondTeam.length)].loseHealth(sortedFirstTeam[i].getAttack())
            }
            if (sortedSecondTeam[i].isAlive()) {
                sortedFirstTeam[Math.floor(Math.random() * sortedFirstTeam.length)].loseHealth(sortedSecondTeam[i].getAttack())
            }
        }

    }
    if (team1.isAliveCharacter()) {
        console.log("TEAM 1 Gagne")
        return team1
    } else {
        console.log("TEAM 2 Gagne")
        return team2
    }
}