export class Thief {
    private health: number;
    private attack: number;
    private alive: boolean = true;
    private speed: number;

    constructor(health: number, attack: number, speed: number) {
        this.health = health;
        this.attack = attack;
        this.speed = speed;
    }

    loseHealth(attack: number) {
        var critical = Math.random();
        if (critical >= 0.8) {
            attack *= 2
        }
        this.health -= attack;
        if (this.health <= 0) {
            this.alive = false;
        }
    }

    isAlive() {
        return this.alive;
    }

    getSpeed() {
        return this.speed;
    }

    getAttack() {
        return this.attack;
    }

    getHealth() {
        return this.health;
    }

}