const navbar = document.getElementById("navbar");
const btnToggle = document.getElementById("toggle");
const linksEl = document.querySelector(".links");
const linkContainer = document.querySelector(".link-container");
const scrollLinks = document.querySelectorAll(".scroll-link");


btnToggle.addEventListener('click', () => {
   // linksEl.classList.toggle("show-links");

    const height = linksEl.getBoundingClientRect().height;
    const heightContainer = linkContainer.getBoundingClientRect().height;
    
    if (heightContainer === 0) {
        linkContainer.style.height = `${height}px`;
    }
    else {
        linkContainer.style.height = 0;
    }
})

window.onresize = () => {
    if (window.innerWidth > 900) {
        linkContainer.style.height = 0;
    }
}

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
})

scrollLinks.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if(!fixedNav) {
            position = position - navHeight;
        }

        window.scrollTo({
            left: 0,
            top: position
        });

    })
})