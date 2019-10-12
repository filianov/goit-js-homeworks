'use strict';

function logItems(array) {
    for (let i = 0; i < array.length; i += 1) {
        console.log(`${i + 1} -`, array[i]);
    }
}

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
