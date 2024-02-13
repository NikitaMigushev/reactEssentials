let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ['String']

type Person = {
    name: string;
    age: number;
};

let person: Person

person = {
    name: 'Max',
    age: 32
}

// Type inference

let course: string | number = 'React'
course = 123;

function add(a: number, b: number) {
    return a + b;
}

function printValue(value: any) {
    console.log(value);
}

printValue(1);

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);

console.log(updatedArray);




