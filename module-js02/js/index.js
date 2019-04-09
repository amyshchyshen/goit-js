'use strict'

let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Введите число :");
  if (userInput === null) {
    break;
  } else {
    numbers.push(userInput);
  }
} while (true);

console.log(numbers);

for (let el of numbers) {
  total += Number(el);
}

console.log(`Общая сумма чисел равна ${total}`);