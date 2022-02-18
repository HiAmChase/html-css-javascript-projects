const form = document.getElementById("form");
const textEl = document.getElementById("content");
const alertEl = document.querySelector(".alert");
const listItem = document.getElementById("list");
const btn = document.getElementById("submit");
const btnClear = document.getElementById("clear");

let editElement;
let editID = "";
let editFlag = false;

window.addEventListener("DOMContentLoaded", setupItems);
btnClear.addEventListener('click', clearItems)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const content = textEl.value;
    const id = new Date().getTime().toString();
    if (content && !editFlag) {
        const item = document.createElement("li");
        const attr = document.createAttribute("data-id");
        attr.value = id;
        item.setAttributeNode(attr);
        item.classList.add("item");

        item.innerHTML = `
            <p>${content}</p>
            <div class="tools">
                <button class="tool edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="tool delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        displayAlert('Item Added To The List', 'success');

        const editBtn = item.querySelector(".edit");
        editBtn.addEventListener('click', editItem);

        const deleteBtn = item.querySelector(".delete");
        deleteBtn.addEventListener('click', deleteItem);

        btnClear.classList.remove("hidden");
        listItem.appendChild(item);
        addToLocalStorage(id, content);

        setBackToDefault();
    }
    else if (content && editFlag) {
        editElement.innerHTML = content;
        editLocalStorage(editID, content);
        displayAlert('Value Changed', 'success');
        setBackToDefault();
    }
    else {
        displayAlert('Please enter the value', 'danger');
    }
})

function displayAlert(context, state) {
    alertEl.textContent = context;
    alertEl.classList.add(`alert-${state}`);
    setTimeout(() => {
        alertEl.textContent = '';
        alertEl.classList.remove(`alert-${state}`);
    }, 1000);
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = element.querySelector("p");
    editID = element.dataset.id;

    editFlag = true;

    console.log(element);
    console.log(editID);
    console.log(editElement);

    textEl.value = editElement.textContent;
    btn.innerHTML = 'Edit';
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    listItem.removeChild(element);
    removeFromLocalStorage(element.dataset.id);
    displayAlert("Item Removed", 'danger');
}

function clearItems() {
    const items = listItem.querySelectorAll(".item");
    console.log(items);

    if(items.length > 0) {
        items.forEach((item) => {
            listItem.removeChild(item);
        })
    }
    console.log(listItem);

    btnClear.classList.add("hidden");
    displayAlert("Clear Item", 'danger');
    localStorage.removeItem('list');
    setBackToDefault();
}

function setBackToDefault() {
    textEl.value = '';
    editFlag = false;
    editID = '';
    btn.innerHTML = 'Submit';
}

//Local Storage
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    let items = getLocalStorage();

    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : [];
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map((item) => {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    })

    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter((item) => {
        if (item.id !== id)
            return item;
    })

    localStorage.setItem('list', JSON.stringify(items));
}

//set up items
function setupItems() {
    const items = getLocalStorage();

    if (items.length > 0) {
        items.forEach((item) => {
            createItem(item.id, item.value);
        })
        btnClear.classList.remove("hidden");
    }
}

function createItem(id, value) {
    const item = document.createElement("li");
        const attr = document.createAttribute("data-id");
        attr.value = id;
        item.setAttributeNode(attr);
        item.classList.add("item");

        item.innerHTML = `
            <p>${value}</p>
            <div class="tools">
                <button class="tool edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="tool delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        const editBtn = item.querySelector(".edit");
        editBtn.addEventListener('click', editItem);

        const deleteBtn = item.querySelector(".delete");
        deleteBtn.addEventListener('click', deleteItem);

        listItem.appendChild(item);
        setBackToDefault();
}