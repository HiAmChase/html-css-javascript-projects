const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const nextYear = '1 Jan 2022';

function countdown() {
    const pivot = new Date(nextYear);
    const currentDay = new Date();

    //Date - date => milisecond
    const totalSeconds = (pivot - currentDay) / 1000;

    monthsEl.innerHTML = Math.floor(totalSeconds / 3600 / 24 / 30);
    daysEl.innerHTML = Math.floor(totalSeconds / 3600 / 24 % 30);
    hours = Math.floor(totalSeconds / 3600 % 24);
    minutes = Math.floor(totalSeconds / 60 % 60);
    seconds = Math.floor(totalSeconds % 60);

    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return (time < 10) ? `0${time}` : time;
}

setInterval(countdown, 1000);