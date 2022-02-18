const containerEl = document.querySelector(".container")

window.addEventListener('keydown', (e) => {
    containerEl.innerHTML = `
    <div class="controller">
        <span>event.key</span>
        <div class="box">
            ${(e.code == "Space") ? 'Space' : e.key}
        </div>
    </div>
    <div class="controller">
        <span>event.keyCode</span>
        <div class="box">
            ${e.keyCode}
        </div>
    </div>
    <div class="controller">
        <span>event.code</span>
        <div class="box">
            ${e.code}
        </div>
    </div>
    `;
})

/* 
        <div class="controller">
            <span>event.key</span>
            <div id="key" class="box">
                KeyEvent
            </div>
        </div>
        <div class="controller">
            <span>event.keyCode</span>
            <div id="key-code" class="box">
                81
            </div>
        </div>
        <div class="controller">
            <span>event.code</span>
            <div id="code" class="box">
                ABC
            </div>
        </div>*/