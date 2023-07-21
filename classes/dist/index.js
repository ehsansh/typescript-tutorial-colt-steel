'use strict';

class Player {
    #score = 0;
    mark = 0;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get mark() {
        return this.mark;
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
// player1.addScore();
// console.log(player1.getScore());
console.log(player1.fullName);
