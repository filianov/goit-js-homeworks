'use strict';

const china = 'Китай';

const chile = 'Чили';

const australia = 'Австралия';

const india = 'Индия';

const jamaica = 'Ямайка';

let price;

let country = prompt(`Укажите пожалуйста страну доставки товара`);

switch (country.toLowerCase()) {
    case china.toLowerCase():
        price = 100;
        console.log(`Доставка в ${china} будет стоить ${price} кредитов`);
        break;

    case chile.toLowerCase():
        price = 250;
        console.log(`Доставка в ${chile} будет стоить ${price} кредитов`);
        break;

    case australia.toLowerCase():
        price = 170;
        console.log(`Доставка в ${australia} будет стоить ${price} кредитов`);
        break;

    case india.toLowerCase():
        price = 80;
        console.log(`Доставка в ${india} будет стоить ${price} кредитов`);
        break;

    case jamaica.toLowerCase():
        price = 120;
        console.log(`Доставка в ${jamaica} будет стоить ${price} кредитов`);
        break;

    default:
        alert(`В вашей стране доставка не доступна`);
}
