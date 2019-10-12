'use strict';
function checkForSpam(str) {
    const spamWord1 = 'SALE';
    const spamWord2 = 'SPAM';
    const stringToCheck = str.toUpperCase();
    let result;
    if (
        stringToCheck.includes(spamWord1) ||
        stringToCheck.includes(spamWord2)
    ) {
        result = 'true';
    } else {
        result = 'false';
    }
    return result;
}
console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
