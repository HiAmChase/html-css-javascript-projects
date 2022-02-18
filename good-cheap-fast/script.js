const btn = document.querySelectorAll(".button");

btn.forEach(button => {
    button.addEventListener('click', (e) => {
        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            let check = true;

            btn.forEach(otherBtn => {
                if (otherBtn != button && !otherBtn.classList.contains("active")) {
                    check = false;
                }
            })

            if (check) {
                switch (button.dataset.id) {
                    case "good":
                        const fastEl = document.querySelector('[data-id="fast"]');
                        fastEl.classList.remove('active');
                        break;
                    case "cheap":
                        const goodEl = document.querySelector('[data-id="good"]');
                        goodEl.classList.remove('active');
                        break;
                    case "fast":
                        const cheapEl = document.querySelector('[data-id="cheap"]');
                        cheapEl.classList.remove('active');
                        break;
                }
            }
        }
    })

    
})