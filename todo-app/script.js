const form = document.getElementById("form");
const input = document.getElementById("todo");
const todosEl = document.querySelector(".todos");

const data = JSON.parse(localStorage.getItem('todos'));

if (data) {
    data.forEach((todo) => {
        addTodo(todo, true);
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const text = input.value;

    if (text) {
        addTodo(text);
    }
})

function addTodo(todo, data = false) {
    let todoEl = document.createElement("li");
    todoEl.innerHTML = `
        <p class="${data ? `${todo.completed ? 'completed' : ''}` : ''}">
            ${data ? `${todo.text}` : `${todo}`}
        </p>
        <i class="fas fa-times"></i>
    `;

    todoEl.addEventListener('click', () => {
        const todo = todoEl.querySelector("p");
        todo.classList.toggle("completed");
        updateLS();
    })

    const close = todoEl.querySelector("i");
    close.addEventListener('click', () => {
        todoEl.remove();
        updateLS();
    })

    todosEl.appendChild(todoEl);
    input.value = '';
    updateLS();
}


function updateLS() {
    let todos = document.querySelectorAll("li");

    let todoArr = [];

    todos.forEach((todo) => {
        const content = todo.querySelector("p");
        todoArr.push({
            text: content.innerText,
            completed: (content.classList.contains("completed") ? true : false)
        })
    })

    localStorage.setItem('todos', JSON.stringify(todoArr));
}