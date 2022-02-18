const character = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
const uppercaseChar = character.map(char => char.toUpperCase());
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbol = [
    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'
];

const submitBtn = document.getElementById("submit");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const passwordEl = document.getElementById("password");
const clipboardBtn = document.getElementById("clipboard");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const length = lengthEl.value;
    
    let password = "";

    if (!lowercaseEl.checked && !uppercaseEl.checked &&
        !symbolEl.checked && !numberEl.checked) {
        return;
    }

    password = initilizePassword();

    while(password.length < length) {
        password += addRandom();
    }

    passwordEl.innerText = password;
})

clipboardBtn.addEventListener('click', (e) => {
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

function initilizePassword() {
    let construct = "";
    let password = "";
    let random;
    while(construct.length < 4) {
        random = Math.floor(Math.random() * 4);

        if (construct.indexOf(random) == -1) {
            construct += String(random);
        }
    }

    for (let i = 0; i < construct.length; i++) {
        switch(construct[i]) {
            case "0":
                password += addChar(lowercaseEl, character);
                break;
            case "1": 
                password += addChar(uppercaseEl, uppercaseChar);
                break;
            case "2":
                password += addChar(symbolEl, symbol);
                break;
            case "3":
                password += addChar(numberEl, number);
                break;
        }
    }

    return password;
}

function addChar(input, array) {
    if (input.checked) {
        return getRandomChar(array);
    }
    return "";
}

function addRandom() {
    const random = Math.floor(Math.random() * 4);

    switch (random) {
        case 0:
            return addChar(lowercaseEl, character);
        case 1: 
            return addChar(uppercaseEl, uppercaseChar);
        case 2:
            return addChar(symbolEl, symbol)
        case 3:
            return addChar(numberEl, number);
    }
}

function getRandomChar(collection) {
    const random = Math.floor(Math.random() * collection.length);

    return collection[random];
}