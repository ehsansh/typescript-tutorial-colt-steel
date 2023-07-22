class Player {
    public readonly first: string;
    public readonly last: string;
    protected _score: number = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
    private secretMethod(): void {
        console.log('secret!!');
    }
    get fullName(): string {
        return `${this.first} ${this.last}`;
    }
    get score(): number {
        return this._score;
    }
    set score(val) {
        if (val < 0) throw new Error('it should be a positive number');
        this._score = val;
    }
}

const ehsan = new Player('ehsan', 'shad');
console.log(ehsan.fullName);

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 999;
    }
}

interface Colorful {
    color: string;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

const bike1 = new Bike('green');

interface printable {
    print(): void;
}

class Jacket implements Colorful, printable {
    constructor(public color: string) {}
    print(): void {
        console.log('this a jacket');
    }
}

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getPay(): number {
        return this.salary;
    }
}
