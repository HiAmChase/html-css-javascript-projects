const buttonEl = document.querySelector("button");

buttonEl.addEventListener('click', (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;

    const yOffset = e.target.offsetTop;
    const xOffset = e.target.offsetLeft;

    const xInside = xPos - xOffset;
    const yInside = yPos - yOffset;

    const circleEl = document.createElement('span');
    circleEl.classList.add('circle');
    circleEl.style.top = yInside + 'px';
    circleEl.style.left = xInside + 'px';

    buttonEl.appendChild(circleEl);

    setTimeout(() => circleEl.remove(), 500);
})