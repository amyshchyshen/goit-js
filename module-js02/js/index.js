'use strict'

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = Number(prompt('Введите любое число'));
    numbers.push(userInput);
} while (userInput !== null);

for (let el of numbers) {
    total += Number(el);
};

console.log(`Сумма Ваших чисел: ${total}`);

