import {Thief} from "../class/Thief"
import {Team} from "../class/Team"
import {battle} from "../functions/battle"

describe('Test thief', () => {

    it('should lose 1 hp', () => {
        const thiefTeamOne: Thief = new Thief(5, 1, 2);
        const thiefTeamTwo: Thief = new Thief(5, 1, 2);

        thiefTeamOne.loseHealth(thiefTeamTwo.getAttack());

        expect(thiefTeamOne.getHealth()).toBe(4)
    })

    it('should die when 0 hp', () => {
        const thiefTeamOne: Thief = new Thief(1, 1, 2);
        const thiefTeamTwo: Thief = new Thief(1, 1, 2);

        thiefTeamOne.loseHealth(thiefTeamTwo.getAttack());

        expect(thiefTeamOne.isAlive()).toBe(false)
    })

    it('should be the strongest that win', () => {
        const thiefOne: Thief = new Thief(50, 50, 50);
        const thiefTwo: Thief = new Thief(50, 50, 50);
        const thiefThree: Thief = new Thief(5, 1, 3);
        const thiefFour: Thief = new Thief(5, 1, 2);

        const TeamOne: Team = new Team([thiefOne, thiefTwo])
        const TeamTwo: Team = new Team([thiefThree, thiefFour])

        expect(battle(TeamOne, TeamTwo)).toBe(TeamOne)
    })
})