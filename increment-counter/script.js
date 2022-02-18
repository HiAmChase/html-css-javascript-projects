const counterEls = document.querySelectorAll(".counter");

counterEls.forEach(counterEl => {
    counterEl.innerText = '0';
    const update = () => {
        const target = counterEl.dataset.target;
        //"+": convert string to int
        const c = +counterEl.innerText;
    
        const incre = target / 200;
        if (c < target) {
            counterEl.innerText = `${Math.ceil(c + incre)}`;
            setTimeout(update, 1);
        }
        else {
            counterEl.innerText = target;
        }
    }

    update();
})