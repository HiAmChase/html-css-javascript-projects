const containerEl = document.querySelector(".container");
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let SQUARE = 500;

for (let i = 1; i <= SQUARE; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener('mouseenter', () => {
        const randNumber = Math.floor(Math.random() * colors.length);
        square.style.background = colors[randNumber];
        square.style.boxShadow = `0 0 2px ${colors[randNumber]}, 0 0 10px ${colors[randNumber]}`;
    })

    square.addEventListener('mouseleave', () => {
        square.style.background = "#3d3d3d";
        square.style.boxShadow = `0 0 2px #000`;
    })

    containerEl.appendChild(square);
}