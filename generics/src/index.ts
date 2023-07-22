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
