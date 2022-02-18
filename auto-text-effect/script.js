const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "We Love Programming!";
let index = 1;
let speed = 1000 / speedEl.value;

addText();

function addText() {
    let newText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 1;
    }

    textEl.innerText = newText;

    setTimeout(addText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 1000 / e.target.value;
})