const input = document.querySelector<HTMLInputElement>('#username')!;

console.log(input.value);

const btn = document.querySelector<HTMLButtonElement>('.btn');

function genericExmaple<T>(item: T): T {
    return item;
}

genericExmaple('hi');

genericExmaple(12);

function getRandomElement<T>(items: T[]): T {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}

getRandomElement<string>(['s', 'g', 'd']);

getRandomElement<number>([1, 2, 3, 4]);

function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2,
    };
}

console.log(merge({ name: 'ehsan', job: 'developer' }, [1, 2, 3, 4, 5]));

interface lengthy {
    length: number;
}

function printDoubleLength<T extends lengthy>(thing: T): number {
    return thing.length * 2;
}

function makeEmptyArray<T = number>(): T[] {
    return [];
}

const numbers = makeEmptyArray();
const booleans = makeEmptyArray<boolean>();
const strings = makeEmptyArray<string>();
