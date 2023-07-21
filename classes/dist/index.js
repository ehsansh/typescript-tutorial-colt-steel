'use strict';

class Player {
    static text =
        'static property only exists on the class not in its instances';
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
    set mark(newMark) {
        if (newMark < 0) throw new Error('mark should be positive');
        this.mark = newMark;
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
player1.mark = 10;
console.log(player1.mark);

class Admin extends Player {
    constructor(first, last, powers) {
        super(first, last);
        this.powers = powers;
    }
    isAdmin = true;
}

const admin = new Admin('jack', 'london', 'powers');
console.log(admin);
