function square(num: number) {
    return num * num;
}

square(4);

function greet(person: string = 'stranger') {
    return `Hi there, ${person}`;
}

greet();

greet('Ehsan');

function random(num: number): string | number {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

const calc = (x: number, y: number): number => {
    return 5 * x + 10 * y;
};

//void means that fn does not return anything
function saySomething(): void {
    console.log('hi');
}

//this fn has never type
function makeError(msg: string): never {
    throw new Error(msg);
}

//this has never type too
function endlessLoop(): never {
    while (true) {
        console.log('1');
    }
}
