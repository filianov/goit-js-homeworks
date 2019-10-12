'use strict';
function findLongestWord(string) {
    let words = string.split(' ');
    let logestWord = words[0];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length > logestWord.length) {
            logestWord = words[i];
        }
    }
    return logestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll')); // 'Google'
