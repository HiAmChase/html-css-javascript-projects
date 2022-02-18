const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const containerEl = document.querySelector(".container");

openBtn.addEventListener('click', () => {
    containerEl.classList.add("show-nav");
})

closeBtn.addEventListener('click', () => {
    containerEl.classList.remove("show-nav");
})