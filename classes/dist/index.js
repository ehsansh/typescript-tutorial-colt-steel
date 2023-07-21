'use strict';

class Player {
    #score = 0;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    say() {
        console.log('hello');
    }
    addScore() {
        this.#score++;
    }
    getScore() {
        return this.#score;
    }
}

const player1 = new Player('ehsan', 'shad');
// player1.say();
// console.log(player1);
player1.addScore();
console.log(player1.getScore());
