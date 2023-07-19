let amount: number | string;
amount = 10;
amount = 'ten';

type Point1 = {
    x: string;
    y: string;
};
type Loc1 = {
    long: string;
    lat: string;
};

let coordinate1: Point1 | Loc1;

function printAge(age: string | number): void {
    console.log(`You are ${age} years old.`);
}
//an example of type narrowing
function calculateTax(price: string | number, tax: number): number {
    if (typeof price === 'string') price = parseInt(price.replace('$', ''));
    return price * tax;
}

let stuff: (string | number)[] = [1, 'hi'];

//example of literal types
let mood: 'Happy' | 'Sad' | 'Angry' = 'Sad';
mood = 'Happy';

let highScore: number | boolean;

//array of numbers OR array of strings
let stuff1: number[] | string[];

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: 'ski' | 'snowboard';
    level: SkillLevel;
};

type RGB = {
    r: number;
    g: number;
    b: number;
};

type HSL = {
    h: number;
    s: number;
    l: number;
};

//an array that holds mixture of RGB and HSl color types
let mixed: (RGB | HSL)[];

//accepts a single string OR an array of strings
function greet(param: string | string[]): void {
    if (typeof param === 'string') console.log('Hello param');
    else {
        for (let val of param) console.log(`hello ${val}`);
    }
}
