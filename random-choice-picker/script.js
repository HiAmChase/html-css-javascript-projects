var counter = 0;
var time = undefined;

const formEl = document.querySelector("form");
const boxContainerEl = document.querySelector(".box-container");

formEl.addEventListener('keyup', (e) => {
    createEl(e.target.value);

    if (e.key == "Enter") {
        e.target.value = '';
        time = setInterval(getRandom, 20);
    }
})

function createEl(str) {
    const contents = str.split(',').filter(str => str.trim() !== '').map(str => str.trim());

    boxContainerEl.innerHTML = ''
    
    contents.forEach(content => {
        const boxEl = document.createElement("div");
        boxEl.classList.add("box");

        boxEl.innerText = content;

        boxContainerEl.appendChild(boxEl);
    })
}

function getRandom() {
    counter++;
    
    if (counter >= 100) 
        clearInterval(time);
    const boxesEl = boxContainerEl.querySelectorAll(".box")
    ;
    if (boxesEl.length > 0) {

        const rand = Math.floor(Math.random() * boxesEl.length);

        boxesEl.forEach(boxEl => {
            boxEl.classList.remove("active");
        })

        boxesEl[rand].classList.add("active");
    }
}