'use strict';
import users from './users.js';
const getUserNames = users => {
    const names = users.map(users => users.name);
    return names;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
    const eyeColor = users.filter(users => users.eyeColor === color);
    return eyeColor;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
    const usersByGender = users.filter(users => users.gender === gender);
    console.log(usersByGender);
    const namesByGender = usersByGender.map(
        usersByGender => usersByGender.name,
    );
    return namesByGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => {
    const isActive = users.filter(users => users.isActive);
    return isActive;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Do

const getUserWithEmail = (users, email) => {
    const user = users.find(user => user.email === email);
    return user;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
    const usersByNeededAge = users.filter(
        users => users.age >= min && users.age <= max,
    );
    return usersByNeededAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
    const totalBalance = users.reduce(
        (acc, currency) => acc + currency.balance,
        0,
    );
    return totalBalance;
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
    // const filteredByFriend = [];
    const affilateWithPerson = users.filter(user =>
        user.friends.includes(friendName),
    );
    const usersNamesByFriend = affilateWithPerson.map(user => user.name);
    return usersNamesByFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {
    const arrayOfFriends = users.map(user => [user.name, user.friends]);
    const sortByFriendsQuontity = arrayOfFriends.sort(function(a, b) {
        return a[1].length - b[1].length;
    });
    const sortedByFriendsQuontity = sortByFriendsQuontity.map(
        sorted => sorted[0],
    );
    return sortedByFriendsQuontity;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users => {
    const allSkills = users.reduce((allSkills, user) => {
        allSkills.push(...user.skills);
        return allSkills;
    }, []);
    const unicSkills = allSkills.filter((skill, index, self) => {
        return self.indexOf(skill) === index;
    });
    const sortedSkills = unicSkills.sort();
    return sortedSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
