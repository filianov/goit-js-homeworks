'use strict';

function formatString(string) {
    const arrayByLetters = string.split('');
    let formatedString = string;
    if (arrayByLetters.length > 40) {
        const i = arrayByLetters.length - 40;
        arrayByLetters.splice(40, i, '...');
        formatedString = arrayByLetters.join('');
    }
    return formatedString;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
