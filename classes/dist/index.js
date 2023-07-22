"use strict";
class Player {
    constructor(first, last) {
        this._score = 0;
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log('secret!!');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(val) {
        if (val < 0)
            throw new Error('it should be a positive number');
        this._score = val;
    }
}
const ehsan = new Player('ehsan', 'shad');
console.log(ehsan.fullName);
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999;
    }
}
class Bike {
    constructor(color) {
        this.color = color;
    }
}
const bike1 = new Bike('green');
class Jacket {
    constructor(color) {
        this.color = color;
    }
    print() {
        console.log('this a jacket');
    }
}
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
