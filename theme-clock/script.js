const bodyEl = document.querySelector("body");
const toggleEl = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const weeksOfYear = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setTime();

setInterval(setTime, 1000);

function setTime() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const amp = (hour >= 12) ? "PM" : "AM";

    const day = new Date().getDay();
    const month = new Date().getMonth();
    const today = new Date().getDate();

    timeEl.innerHTML = `${fill(hour)}:${fill(minute)} ${amp}`;
    dateEl.innerHTML = `${daysOfWeek[day]}, ${weeksOfYear[month]} ${today}`;

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;
}

function fill(str) {
    if (str < 10) {
        return '0' + str;
    }
    return str;
}

toggleEl.addEventListener('click', () => {
    bodyEl.classList.toggle("dark");
})

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}