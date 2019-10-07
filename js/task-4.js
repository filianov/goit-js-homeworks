'use strict';

let credits = 23580;

let message;

const pricePerDroid = 3000;

let totalPrice;

let droidQuontity = prompt(
    `Сколько прекрасных ремонтных дроидов Вы хотите приобрести по цене ${pricePerDroid} кредитов?`,
);

if (droidQuontity === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if (Number(droidQuontity) && droidQuontity * pricePerDroid <= credits) {
    totalPrice = droidQuontity * pricePerDroid;
    credits = credits - totalPrice;
    message = `Вы купили ${droidQuontity} дроидов, на счету осталось ${credits} кредитов.`;
    console.log(message);
} else {
    message = `Недостаточно средств на счету!`;
    console.log(message);
}
