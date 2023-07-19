function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({ first: 'ehsan', last: 'shadmehri' });

//defining type alias
type Coordinate = {
    x: number;
    y: number;
};

const coordinate: Coordinate = { x: 12, y: 77 };

function getRandomCoordinate(): Coordinate {
    return {
        x: Math.random(),
        y: Math.random(),
    };
}

//nested objects aliases
type Student = {
    name: string;
    age: number;
    marks: {
        physcis: number;
        math: number;
    };
};

function giveStudentAge(student: Student): number {
    return student.age;
}

//define optional properties
type Point = {
    x: number;
    y?: number;
};
const myPoint: Point = { x: 10 };

//readonly modifier
type User = {
    readonly id: number;
    username: string;
};

let user: User = { id: 11, username: 'ehsan' };

//intersection types
type Circle = {
    radius: number;
};
type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: 'yellow',
};
