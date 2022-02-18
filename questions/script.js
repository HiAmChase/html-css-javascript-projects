const questions = document.querySelectorAll(".card");

questions.forEach((question) => {
    const btn = question.querySelector("button");
    const text = question.querySelector(".text");

    btn.addEventListener('click', () => {
        text.classList.toggle("show-text");

        questions.forEach((item) => {
            const itemText = item.querySelector(".text"); 
            const itemBtn = item.querySelector("button");

            if (item !== question) {
                itemText.classList.remove("show-text");
            }
            if (itemText.classList.contains("show-text")) {
                itemBtn.innerHTML = `
                    <i class="far fa-minus-square"></i>
                `;
            }
            else {
                itemBtn.innerHTML = `
                    <i class="far fa-plus-square"></i>
                `;
            }
        })
    });
});