'use strict';

class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    say() {
        console.log('hello');
    }
}

const player1 = new Player('ehsan', 'shad');
player1.say();
console.log(player1.first);
