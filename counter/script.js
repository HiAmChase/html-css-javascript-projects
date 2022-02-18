const resetBtn = document.getElementById("reset");
const increBtn = document.getElementById("increase");
const decreBtn = document.getElementById("decrease");
const counter = document.getElementById("counter");

let currentCount = 0;

decreBtn.addEventListener('click', () => {
    currentCount -= 1;
    counter.innerHTML = currentCount;
    checkCounter();
})

increBtn.addEventListener('click', () => {
    currentCount += 1;
    counter.innerHTML = currentCount;
    checkCounter();
})

resetBtn.addEventListener('click', () => {
    currentCount = 0;
    counter.innerHTML = currentCount;
    checkCounter();
})

function checkCounter() {
    if (currentCount > 0) {
        counter.style.color = "#58d426";
    }
    else if (currentCount === 0) {
        counter.style.color = "#000000";
    }
    else {
        counter.style.color = "#e42626";
    }
}