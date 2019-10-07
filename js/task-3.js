'use strict';

let message;

const ADMIN_PASSWORD = 'jqueryismyjam';

let TYPED_PASSWORD = prompt(`Введите пароль`);

if (TYPED_PASSWORD === null) {
    message = 'Отменено пользователем!';
    console.log(message);
} else if (TYPED_PASSWORD === ADMIN_PASSWORD) {
    message = `Добро пожаловать!`;
    console.log(message);
} else {
    message = `Доступ запрещен, неверный пароль!`;
    console.log(message);
}

alert(message);
