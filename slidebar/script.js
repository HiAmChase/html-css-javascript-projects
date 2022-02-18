const slidesEl = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let counter = 0;

slidesEl.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

nextBtn.addEventListener("click", () => {
    counter++;
    carousel();
})

prevBtn.addEventListener("click", () => {
    counter--;
    carousel();
})

function carousel() {
    if (counter < 0) {
        counter = slidesEl.length - 1;
    }

    else if (counter > slidesEl.length - 1) {
        counter = 0;
    }
    slidesEl.forEach((slide) => {
        slide.style.transform = `translateX(${-counter * 100}%)`;
    })
}