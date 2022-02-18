const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const bodyEl = document.querySelector("body");
const titleEl = document.querySelector(".card h1");
const contentEl = document.getElementById("content")

openBtn.addEventListener('click', () => {
    bodyEl.classList.toggle("new-color");
    closeBtn.classList.remove("hidden");
    openBtn.classList.add("hidden");
    titleEl.classList.add("hidden");
    contentEl.classList.remove("hidden");
});

closeBtn.addEventListener('click', () => {
    bodyEl.classList.toggle("new-color");
    closeBtn.classList.add("hidden");
    openBtn.classList.remove("hidden");
    titleEl.classList.remove("hidden");
    contentEl.classList.add("hidden");
})