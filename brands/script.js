const header = document.querySelector("header");
const toggleBtn = document.querySelector(".toggle");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

toggleBtn.addEventListener('click', toggle);

function toggle() {
    header.classList.toggle("active");
}