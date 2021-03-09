const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");
const sizeEl = document.getElementById("size");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const colorEl = document.getElementById("color");

let isPressed = false;
let size = 10;
let x = undefined;
let y = undefined;
let color = 'black';

updateSize();

canvasEl.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvasEl.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvasEl.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
    size += 2;

    if (size >= 30) {
        size = 30;
    }

    updateSize();
})

decreaseBtn.addEventListener('click', () => {
    size -= 2;

    if (size <= 4) {
        size = 4;
    }

    updateSize();
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

colorEl.addEventListener('change', (e) => {
    color = colorEl.value;
})

function updateSize() {
    sizeEl.innerText = size;
}