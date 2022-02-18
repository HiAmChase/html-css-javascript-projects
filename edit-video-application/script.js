const headerEl = document.getElementById("header");
const toggleBtn = document.querySelector(".toggle");
window.addEventListener('scroll', () => {
    headerEl.classList.toggle('sticky', window.scrollY > 0);
})

toggleBtn.addEventListener('click', toggle);

function toggle() {
    headerEl.classList.toggle("active");
}