const toggleBtn = document.querySelector(".nav-toggle");
const closeSidebar = document.getElementById("close");
const sidebarEl = document.querySelector(".sidebar");

toggleBtn.addEventListener('click', () => {
    sidebarEl.classList.toggle("show-sidebar");
});

closeSidebar.addEventListener('click', () => {
    sidebarEl.classList.remove("show-sidebar");
});