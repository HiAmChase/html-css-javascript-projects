const btns = document.querySelectorAll(".tab-btn");
const tabContainer = document.querySelector(".tab-container");
const articles = document.querySelectorAll(".content");

tabContainer.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    
    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("active");  
        });
        
        e.target.classList.add("active");

        articles.forEach((article) => {
            article.classList.remove("show");
        })

        const el = document.getElementById(id);
        el.classList.add("show");
    }
})