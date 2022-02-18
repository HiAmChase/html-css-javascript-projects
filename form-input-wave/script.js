const labelEls = document.querySelectorAll(".form-control label");

labelEls.forEach((label) => {
    label.innerHTML = label.innerText.
                split("").
                map((char, index) => `<span style="transition-delay: ${30 * index}ms ">${char}</span>`)
                .join(' ');
})