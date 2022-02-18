const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
    notes.forEach(note => {
        if (note) {
            addNewNote(note);
        }
    })
}

addBtn.addEventListener("click", () => {
    addNewNote();
})

function addNewNote(text = '') {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="toolbox">
            <button id="edit" class="tool edit">
                <i class="fas fa-edit"></i>
            </button>
            <button id="delete" class="tool delete">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        <textarea name="note" id="note" cols="30" rows="10" disabled>${text}</textarea>
    `;

    const editBtn = note.querySelector(".edit");
    const textareaEl = note.querySelector("textarea");
    const deleteBtn = note.querySelector(".delete");

    editBtn.addEventListener('click', () => {
        if (textareaEl.hasAttribute("disabled")) {
            textareaEl.removeAttribute("disabled");
        }
        else {
            textareaEl.setAttribute("disabled", "");
        }
    })

    textareaEl.addEventListener('input', () => {
        updateLS();
    })

    deleteBtn.addEventListener('click', () => {
        document.querySelector(".note-container").removeChild(note);

        updateLS();
    })

    document.querySelector(".note-container").appendChild(note);
}

function updateLS() {
    const allTextarea = document.querySelectorAll("textarea");

    let notes = [];

    allTextarea.forEach(note => {
        if (note.value) {
            notes.push(note.value);
        }
    })

    localStorage.setItem('notes', JSON.stringify(notes));
}