let names1: string[] = [];
names1 = ['ehsan', 'asal', 'ali'];

let names2: Array<string> = [];
names2 = ['hoda', 'saba'];

let ages1: number[] = [];
let ages2: Array<number> = [];

let nested: number[][] = [
    [1, 2],
    [4, 2],
];

let nested2: Array<Array<number>> = [[1], [2]];

let ages: number[] = [];

let gamesBoards: string[][] = [];

type Product = {
    name: string;
    price: number;
};

function getTotal(products: Product[]): number {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}
