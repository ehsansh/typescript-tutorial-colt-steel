const input = document.querySelector<HTMLInputElement>('#username')!;

console.log(input.value);

const btn = document.querySelector<HTMLButtonElement>('.btn');

function genericExmaple<T>(item: T): T {
    return item;
}

genericExmaple('hi');

genericExmaple(12);
