const containerEl = document.querySelector(".container");
const countEl = document.getElementById('count');

let count = 0;

containerEl.addEventListener('dblclick', (e) => {
    count += 1;
    countEl.innerText = count;

    const xPos = e.clientX;
    const yPos = e.clientY;

    const heartEl = document.createElement('div');

    heartEl.setAttribute('id', 'heart');
    heartEl.classList.add('heart');

    heartEl.innerHTML = `<i class="fas fa-heart"></i>`;
    heartEl.style.top = `${yPos}px`;
    heartEl.style.left = `${xPos}px`;
    document.body.appendChild(heartEl);

    setTimeout(() => {
        document.body.removeChild(heartEl);
    }, 1000);
})