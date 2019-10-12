'use strict';

function calculateEngravingPrice(message, pricePerWord) {
    let wordsToCount = message.split(' ');
    return wordsToCount.length * pricePerWord;
}

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100
