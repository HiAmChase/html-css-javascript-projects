const colors = ["#4cd137", "#00a8ff", "#c23616"];
const showBtn = document.getElementById("show-notify");
const messageContainer = document.querySelector(".message-container");

showBtn.addEventListener('click', () => {
    const messageEl = document.createElement("div");
    messageEl.classList.add("message");

    let randomEl = Math.floor(Math.random() * 3) + 1;

    console.log(randomEl);

    if (randomEl === 1)
        messageEl.innerHTML = `Message One`;
    else if (randomEl === 2)
        messageEl.innerHTML = `Message Two`;
    else
        messageEl.innerHTML = `Message Three`;

    randomEl = Math.floor(Math.random() * 3);
    messageEl.style.color = colors[randomEl];

    messageContainer.insertBefore(messageEl, messageContainer.firstChild);

    setTimeout(() => {
        messageContainer.removeChild(messageEl);
    }, 4000);
})