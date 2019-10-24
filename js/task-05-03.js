'use strict';
class Storage {
    constructor(items) {
        this.items = items;
    }
    getItems() {
        console.log(this.items);
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        let items = this.items;

        for (let i = 0; i < items.length; i += 1) {
            items = items[i] === item ? items.splice(i, 1) : items;
        }
    }
}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(storage.items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
