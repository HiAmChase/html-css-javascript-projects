const boxEls = document.querySelectorAll(".box");

showBox();

function showBox() {
    const trigger = window.innerHeight / 5 * 4;

    boxEls.forEach((boxEl) => {
        if (trigger > boxEl.getBoundingClientRect().top)
            boxEl.classList.add("active");
        else 
            boxEl.classList.remove("active");
    })
}

window.addEventListener('scroll', showBox);
