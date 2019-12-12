'use strict';

const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
};

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

let interval = null;

function onChangeBG(e) {
    if (!interval) {
        interval = setInterval(() => setRandomColor(), 1000);
    } else return;
}

function offChangeBG(e) {
    clearInterval(interval);
    interval = null;
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = () => {
    const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    const curruntColor = colors[colorIndex];
    document.body.style.backgroundColor = curruntColor;
};

refs.startButton.addEventListener('click', onChangeBG);

refs.stopButton.addEventListener('click', offChangeBG);
