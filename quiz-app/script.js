const quizData = [
    {
        question: "Which player scored the fastest hat-trick in the Premier League ?",
        a: "Sadio Mane",
        b: "Wayne Rooney",
        c: "Cristiano Ronaldo",
        d: "Fernando Torres",
        correct: "a"
    },
    {
        question: "With 202 clean sheets, which goalkeeper has the best record in the Premier League ?",
        a: "Van de Sar",
        b: "Peter Schmeichel",
        c: "Petr Cech",
        d: "De Gea",
        correct: "c"
    },
    {
        question: "Which team won the first Premier League title ?",
        a: "Chelsea",
        b: "Manchester United",
        c: "Arsenal",
        d: "Liverpool",
        correct: "b"
    },
    {
        question: "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it ?",
        a: "Shane Long",
        b: "Steven Gerrard",
        c: "Cristiano Ronaldo",
        d: "Mario Balotelli",
        correct: "a"
    },
    {
        question: "How many clubs competed in the inaugural Premier League season ?",
        a: "19",
        b: "20",
        c: "21",
        d: "22",
        correct: "d"
    },
];

const questionEl = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const answerEls = document.querySelectorAll(".answer");
const formEl = document.getElementById("form");
//get text from label
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deleteSelected();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

loadQuiz();

function deleteSelected() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            //location.reload(): reload current document
            formEl.innerHTML = `
                <h4 class="notify">Finished. You correct ${score}/${quizData.length} question.</h4>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
})