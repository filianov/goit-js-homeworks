'use strict';

const total = 100;

let ordered = 50;

if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log('На складе недостаточно твоаров!');
}

ordered = 150;

if (ordered <= total) {
    console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
    console.log('На складе недостаточно твоаров!');
}
