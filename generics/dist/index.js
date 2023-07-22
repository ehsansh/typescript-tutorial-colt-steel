"use strict";
const input = document.querySelector('#username');
console.log(input.value);
const btn = document.querySelector('.btn');
function genericExmaple(item) {
    return item;
}
genericExmaple('hi');
genericExmaple(12);
function getRandomElement(items) {
    const index = Math.floor(Math.random() * items.length);
    return items[index];
}
getRandomElement(['s', 'g', 'd']);
getRandomElement([1, 2, 3, 4]);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(merge({ name: 'ehsan', job: 'developer' }, [1, 2, 3, 4, 5]));
function printDoubleLength(thing) {
    return thing.length * 2;
}
