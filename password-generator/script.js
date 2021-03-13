const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const submitEl = document.getElementById('submit');
const passwordEl = document.getElementById("password");
const form = document.querySelector("form");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";

submitEl.addEventListener('click', (e) => {
    e.preventDefault();
    generatePassword();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    generatePassword();
})

function generatePassword() {
    const length = lengthEl.value;
    if (!length) {    
        return;
    }

    if (!uppercaseEl.checked &&
        !lowercaseEl.checked &&
        !numberEl.checked &&
        !symbolEl.checked) {
        alert("Warning !");
        return;
    }

    password = "";
    for (let i = 0; i < length; i++) {
        password += generateCharacters();
    }

    console.log(password);
    passwordEl.innerText = password;
}

function generateCharacters() {
    let x = [];

    if (uppercaseEl.checked) {
        x.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
    }
    if (lowercaseEl.checked) {
        x.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
    }
    if (numberEl.checked) {
        x.push(number[Math.floor(Math.random() * number.length)]);
    }
    if (symbolEl.checked) {
        x.push(symbol[Math.floor(Math.random() * symbol.length)]);
    }

    return x[Math.floor(Math.random() * x.length)];
}

copyEl.addEventListener('click', (e) => {
    e.preventDefault();
    var textArea = document.createElement("textarea");

    textArea.value = passwordEl.innerText;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);

})