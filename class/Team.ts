import {Thief} from "./Thief"
export class Team {
    characters: Array < Thief > ;

    constructor(characters: Array < Thief > ) {
        this.characters = characters;
    }

    isAliveCharacter() {
        var alive = false;
        for (var i = 0; i < this.characters.length; i++) {
            if (this.characters[i].isAlive()) {
                alive = true
            }
        }
        return alive;
    }
}