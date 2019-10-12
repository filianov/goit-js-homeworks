'use strict';
let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt(
        `Введите Ваше число для того, чтобы получить новую сумму, если хотите остановить цикл нажмите [cancel]`,
    );
    if (input === null) {
        break;
    } else {
        numbers.push(input);
    }
    console.log(numbers);
}

function totalSum(numbers) {
    if (numbers.indexOf(numbers[0]) === -1) {
        return alert('Массив пуст, Вы не ввели чисел');
    } else
        for (const number of numbers) {
            total += Number(number);
        }
    return console.log(`Общая сумма чисел равна ${total}`);
}
totalSum(numbers);
