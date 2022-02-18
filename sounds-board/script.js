const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.querySelector(".buttons");


sounds.forEach(sound => {
    console.log(sound);
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        pauseAll();

        document.getElementById(sound).play();
    })

    buttons.appendChild(btn);
})

function pauseAll() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);

        audio.pause();
        audio.currentTime = 0;
    })
}