const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");

var activeSlide = 0;

updateBg();

leftBtn.addEventListener('click', () => {
    activeSlide -= 1;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    updateSlide();
    updateBg();
})

rightBtn.addEventListener('click', () => {
    activeSlide += 1;
    
    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    updateSlide();
    updateBg();
})

function updateSlide() {
    slides.forEach(slide => {
        slide.classList.remove("active");
    })

    slides[activeSlide].classList.add("active");
}

function updateBg() {
    document.body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}