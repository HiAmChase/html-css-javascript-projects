const bgEl = document.querySelector(".bg");
const textEl = document.querySelector(".text");

let load = 0;

let int = setInterval(loadingBlur, 30);

function loadingBlur() {
    load++;

    if (load > 99)
        clearInterval(int);

    textEl.innerHTML = `${load}%`;
    textEl.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
    bgEl.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }