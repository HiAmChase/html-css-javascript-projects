const cardsEl = document.querySelectorAll(".card");
const containerEl = document.querySelector(".container");
cardsEl.forEach((card) => {
    card.addEventListener('click', () => {
        cardsEl.forEach((anotherCard) => {
            if (anotherCard != card) {
                anotherCard.classList.remove("active");
            }
        })
        card.classList.add("active");
    })
})