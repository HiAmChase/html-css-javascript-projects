const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const leftTransform = document.querySelectorAll(".lef-transform");
const rightTransform = rightSlide.querySelectorAll("div");
const downSlide = document.getElementById("down-slide");
const upSlide = document.getElementById("up-slide");

let itemLength = rightSlide.querySelectorAll("div").length;
let current = 0;

//Initialize
leftTransform.forEach((slide, index) => {
    slide.style.transform = `translateY(${index} * 100%)`;
})

rightTransform.forEach((slide, index) => {
    slide.style.transform = `translateY(${-index} * 100%)`;
})

rightSlide.style.top = `-${(itemLength - 1) * 100}%`;

function changeDirection(direction) {

    if (direction === 'up') {
        current -= 1;
        if (current < 0) {
            current = itemLength - 1;
        }
    }
    else if (direction === 'down') {
        current += 1;
        if (current > itemLength - 1) {
            current = 0;
        }
    }

    leftSlide.style.transform = `translateY(-${current * 100}%)`;

    rightSlide.style.transform = `translateY(${current * 100}%)`;
    console.log(current);
}


downSlide.addEventListener('click', () => changeDirection('down'));

upSlide.addEventListener('click', () => changeDirection('up'));