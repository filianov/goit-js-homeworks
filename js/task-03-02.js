'use strict';

function countProps(obj) {
    const keys = Object.keys(obj);
    const numberOfProperties = keys.length;
    return numberOfProperties;
}

console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));
