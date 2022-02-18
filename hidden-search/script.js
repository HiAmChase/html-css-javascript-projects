const searchBtn = document.getElementById("search");
const textEl = document.getElementById("text");

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    textEl.classList.toggle("active");
})