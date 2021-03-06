'use strict';

// Task1
// What wariat better?

const ulCategories = document.querySelectorAll('#categories');

ulCategories.forEach(item => console.log(item.children));

const items = document.querySelectorAll('.item');

console.log(items);

const heads = document.querySelectorAll('h2');

heads.forEach(head => console.log('Категория:', head.innerText));

const innerItems = document.querySelectorAll('.js-innerItem');

innerItems.forEach(li =>
    console.log('Количество элементов:', li.childElementCount),
);

// Task2

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients');

const listOfIngregients = createListOfIngregients(ingredients);

ingredientsContainer.appendChild(listOfIngregients);

function createListOfIngregients() {
    const ingregientList = document.createElement('ul');
    ingredients.map((ingredient, i) => {
        ingredient = document.createElement('li');
        ingredient.textContent = ingredients[i];
        ingregientList.append(ingredient);
    });
    return ingregientList;
}
// Task3

const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryContainer = document.querySelector('#gallery');

const imagesLayout = setLayoutGallery(images);

galleryContainer.insertAdjacentHTML('beforeend', imagesLayout);

function setLayoutGallery({ url, alt }) {
    const imageLayout = images
        .map(
            image =>
                `<li class='container'><img class='image' src='${image.url}' alt='${image.alt}'></img></li>`,
        )
        .join('');
    return imageLayout;
}

// Task4

let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');

const increment = document.querySelector('[data-action="increment"]');

const counter = document.querySelector('#value');

decrement.addEventListener('click', event => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

increment.addEventListener('click', event => {
    counterValue += 1;
    counter.textContent = counterValue;
});

// Task5

const inputValue = document.querySelector('#name-input');

const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('change', handleInput);
function handleInput(event) {
    if (event && event.target.value !== '') {
        const inputV = event.currentTarget;
        return (outputValue.textContent = inputV.value);
    } else return (outputValue.textContent = 'незнакомец');
}

// Task6
const input6Value = document.querySelector('#validation-input');

input6Value.addEventListener('blur', valitateIntut);
function valitateIntut(event) {
    if (
        event &&
        input6Value.value.length !== Number(input6Value.dataset.length)
    ) {
        return input6Value.classList.add('invalid');
    } else input6Value.classList.remove('invalid');
    return input6Value.classList.add('valid');
}

// Task7

const scroll = document.querySelector('#font-size-control');

const text = document.querySelector('#text');

scroll.addEventListener('input', changeFontSizeWithScroll);

function changeFontSizeWithScroll(event) {
    if (event) {
        text.style.fontSize = `${scroll.value}px`;
    }
}
