'use strict';

const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

function calculateTotalPrice(products, productName) {
    let totalSum;
    for (const product in products) {
        // console.log(products[product]);
        if (productName === products[product].name) {
            totalSum = products[product].price * products[product].quantity;
        }
    }
    return totalSum;
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
