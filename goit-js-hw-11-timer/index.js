'use strict';

const refs = {
    daysSelector: document.querySelector('span[data-value="days"]'),
    hoursSelector: document.querySelector('span[data-value="hours"]'),
    minsSelector: document.querySelector('span[data-value="mins"]'),
    secsSelector: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
    constructor(params) {
        this.params = params;
    }
    start() {
        this.timerId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.params.targetDate - currentTime;
            const time = new Date(deltaTime);
            console.log(time);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = String(
                Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            ).padStart(2, '0');
            const mins = String(
                Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
            ).padStart(2, '0');
            const secs = String(
                Math.floor((time % (1000 * 60)) / 1000),
            ).padStart(2, '0');

            refs.daysSelector.textContent = days;
            refs.hoursSelector.textContent = hours;
            refs.minsSelector.textContent = mins;
            refs.secsSelector.textContent = secs;
            if (time < 0) {
                clearInterval(this.timerId);
            }
        }, 1000);
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Feb 17, 2021'),
});

timer.start();
