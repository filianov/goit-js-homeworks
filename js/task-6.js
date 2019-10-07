'use strict';

let input;

let total = 0;

while (true) {
    input = prompt(
        `Введите Ваше число для того, чтобы получить новую сумму, если хотите остановить цикл нажмите [cancel]`,
    );
    if (input === null) {
        break;
    }

    console.log(input);

    input = Number(input);

    if (Number.isNaN(input)) {
        alert(`Было введено не число, попробуйте еще раз`);
    }

    total += input;
}

alert(`Общая сумма чисел равна ${total}`);
