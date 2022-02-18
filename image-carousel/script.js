const preBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const imgContainer = document.querySelector(".img-container");
const imagesEl = document.querySelectorAll(".img-container img");
const size = imagesEl.length;

let index = 0;

imagesEl.forEach((image, index) => {
    image.style.transform = `translateX(${index} * 100%)`;
});

preBtn.addEventListener('click', () => changeSlide("prev"));
nextBtn.addEventListener('click', () => changeSlide("next"));

function changeSlide(state) {
    if (state == 'prev') {
        index--;

        if (index < 0) {
            index = size - 1;
        }
    }
    else if (state == "next") {
        index++;
        if (index > size - 1) {
            index = 0;
        }
    }

    imgContainer.style.transform = `translateX(${-index * 100}%)`;
}