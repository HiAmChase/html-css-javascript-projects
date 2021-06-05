const canvas = document.getElementById("canvas");
const colorEl = document.getElementById("color");
const increaseEl = document.getElementById("increase");
const decreaseEl = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext('2d');
let isPressed = false;
let color = colorEl.value;
let size = 10;
let x, y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
    console.log(x, y);
}) 

canvas.addEventListener('mouseup', () => {
    isPressed = false;
}) 

canvas.addEventListener('mouseup', () => {
    isPressed = false;
}) 

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        let x2 = e.offsetX;
        let y2 = e.offsetY;

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
}) 

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseEl.addEventListener('click', () => {
    size += 5;

    sizeEl.innerHTML = size;
})

decreaseEl.addEventListener('click', () => {
    size -= 5;

    sizeEl.innerHTML = size;
})

colorEl.addEventListener('change', () => {
    color = colorEl.value;
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})