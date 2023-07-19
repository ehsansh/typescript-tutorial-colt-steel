interface Point3 {
    x: number;
    y: number;
}

const pt: Point3 = { x: 12, y: 11 };

interface Person {
    readonly id: number;
    name: string;
    nickname?: string;
    sayHi: () => string;
}

const jack: Person = {
    id: 1,
    name: 'jack',
    sayHi: () => {
        return 'HI';
    },
};

interface Product {
    name: string;
    price: number;
    applyDiccount(discount: number): number;
}

const shoes: Product = {
    name: 'adidas',
    price: 100,
    applyDiccount(discount: number): number {
        return 2;
    },
};

interface Dog {
    age: number;
    name: string;
}

interface Dog {
    breed: string;
    bark(): string;
}

const joe: Dog = {
    name: 'joe',
    age: 2,
    breed: 'breed',
    bark() {
        return 'woof';
    },
};

interface ServiceDog extends Dog {
    job: 'bomb' | 'guide' | 'drug sniffer';
}

interface PersonNew {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends PersonNew, Employee {
    level: string;
    languages: string[];
}

const john: Engineer = {
    name: 'john',
    id: 1,
    email: 'john@gmail.com',
    level: 'junior',
    languages: ['english'],
};
