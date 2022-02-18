const circlesEl = document.querySelectorAll(".circle");
const nextBtn = document.getElementById("next");
const preBtn = document.getElementById("pre");
const progress = document.querySelector(".progress");

let counter = 0;

preBtn.addEventListener('click', () => {
    counter--;
    
    if (counter < 0) {
        counter = 0;
    }

    update();
})

nextBtn.addEventListener('click', () => {
    counter++;

    if (counter > circlesEl.length - 1) {
        counter = circlesEl.length - 1;
    }

    update();
})

function update() {
    circlesEl.forEach((circle, index) => {
        if (index <= counter)
            circle.classList.add("active");
        else 
            circle.classList.remove("active");
    })

    if (counter == 0) {
        preBtn.disabled = true;
    }
    else if (counter == circlesEl.length - 1)
        nextBtn.disabled = true;
    else {
        preBtn.disabled = false;
        nextBtn.disabled = false;
    }

    progress.style.width = (counter / (circlesEl.length - 1)) * 100 + '%';
    console.log(counter / (circlesEl.length - 1));
}

console.log(circlesEl.length);